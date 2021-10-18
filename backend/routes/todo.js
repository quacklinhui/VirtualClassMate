import express from 'express';

import { getPersonalTodo, getGroupTodo, createPersonalTodo, createGroupTodo, updateTodo, deleteTodo } from '../controllers/todolist.js';

const router = express.Router();

router.get('/user/:referenceID', getPersonalTodo);
router.get('/room/:referenceID', getGroupTodo);
router.post('/user/:referenceID', createPersonalTodo);
router.post('/room/:referenceID', createGroupTodo);
router.patch('/:id', updateTodo);
router.delete('/:id', deleteTodo);

// router.get('/user/:id', getUserTodo); // get a user's to do items
// router.get('/room/:id', getRoomTodo); // get a room's to do items
// router.post('/', createTodo);
// router.patch('/:id', updateTodo);
// router.delete('/:id', deleteTodo);

export default router;