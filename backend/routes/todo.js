import express from 'express';

import { getTodo, createTodo, updateTodo, deleteTodo } from '../controllers/todolist.js';

const router = express.Router();

router.get('/', getTodo);
router.post('/', createTodo);
router.patch('/:id', updateTodo);
router.delete('/:id', deleteTodo);

// router.get('/user/:id', getUserTodo); // get a user's to do items
// router.get('/room/:id', getRoomTodo); // get a room's to do items
// router.post('/', createTodo);
// router.patch('/:id', updateTodo);
// router.delete('/:id', deleteTodo);

export default router;