import express from 'express';

import { getRoom, createRoom, getRooms } from '../controllers/room.js';

const router = express.Router();

router.get('/:id', getRoom);
router.get('/', getRooms)
router.post('/', createRoom);
router.patch('/', )

export default router;