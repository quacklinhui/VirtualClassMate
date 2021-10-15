import express from 'express';
import { sendMessage, getMessages } from '../controllers/chat.js';

const router = express.Router();


router.get('/:roomID', getMessages); // Get all chat messages from a room

router.post('/:roomID', sendMessage); // Send a chat message

export default router;