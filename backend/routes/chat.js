import express from 'express';
import { sendMessage } from '../controllers/chat.js';

const router = express.Router();

router.post('/:roomID', sendMessage); // Send a chat message

export default router;