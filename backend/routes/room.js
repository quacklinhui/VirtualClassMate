import express from 'express';

import { getRoom, createRoom, getRooms, checkFriendToAdd, addMember, checkRoomUsers, createMessage, checkMessage, requestToJoinRoom } from '../controllers/room.js';

const router = express.Router();

router.get('/', getRooms); // Get all rooms in the DB
router.get('/:id', getRoom); // Get room
router.get('/check', checkFriendToAdd)
router.get('/getmembers/:id', checkRoomUsers)
router.get('/chat/:id', checkMessage)

router.post('/', createRoom); // User create a room
router.post('/chat', createMessage);

router.patch('/', );
router.patch('/add', addMember);
router.patch('/request/:id', requestToJoinRoom); // User request to join room

export default router;