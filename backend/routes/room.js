import express from 'express';

import { getRoom, createRoom, getRooms, checkFriendToAdd, addMember, checkRoomUsers, createMessage, checkMessage, requestToJoinRoom, acceptRequest, leaveRoom } from '../controllers/room.js';

const router = express.Router();

router.get('/', getRooms); // Get all rooms in the DB
router.get('/:id', getRoom); // Get room
router.get('/check', checkFriendToAdd);
router.get('/getmembers/:id', checkRoomUsers); // Route may not be necessary
router.get('/chat/:id', checkMessage);

router.post('/', createRoom); // User create a room
router.post('/chat', createMessage);

router.patch('/add/:id', addMember); // Admin adds member to room
router.patch('/request/:id', requestToJoinRoom); // User request to join room
router.patch('/accept-request/:id', acceptRequest); // Admin accepts request to join room
router.patch('/leave/:id', leaveRoom); // Member leave room, if admin leaves room (admin passed to random person), if last member, then room is deleted

export default router;