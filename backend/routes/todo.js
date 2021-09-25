import express from 'express';

import { getTodo, createTodo } from '../controllers/todolist.js';

const router = express.Router();

router.get('/', getTodo);
router.post('/', createTodo);

export default router;