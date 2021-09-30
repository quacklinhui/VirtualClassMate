import express from 'express';

import { getRoom, createRoom, getRooms, checkFriendToAdd, addMember, checkRoomUsers, createMessage, checkMessage } from '../controllers/room.js';

const router = express.Router();


router.get('/check', checkFriendToAdd)
router.get('/:id', getRoom);
router.get('/', getRooms)
router.post('/', createRoom);
router.patch('/', )
router.patch('/add', addMember)
router.get('/getmembers/:id', checkRoomUsers)
router.get('/chat/:id', checkMessage)
router.post('/chat', createMessage)

export default router;