import express from 'express';
import { sendMessage, getMessages, deleteMessages } from '../controllers/chat.js';

const router = express.Router();

router.get('/:roomID', getMessages); // Get all chat messages from a room

router.post('/:roomID', sendMessage); // Send a chat message

router.delete('/', deleteMessages); // Not to be used in app

export default router;