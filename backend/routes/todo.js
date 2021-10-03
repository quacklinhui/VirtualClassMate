import express from 'express';

import { getTodo, createTodo, deleteTodo } from '../controllers/todolist.js';

const router = express.Router();

router.get('/', getTodo);
router.post('/', createTodo);
router.delete('/:id', deleteTodo);

export default router;