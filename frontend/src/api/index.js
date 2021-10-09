import axios from 'axios';

const url = 'http://localhost:5000/todo';
const url2 = 'http://localhost:5000/user';

export const fetchTodo = () => axios.get(url);
export const createTodo = (newTodo) => axios.post(url,newTodo);
export const updateTodo = (id,updatedTodo) => axios.patch(`${url}/${id}`, updatedTodo);
export const deleteTodo = (id) => axios.delete(`${url}/${id}`);

export const addFriend = (id, addFriend) => axios.patch(`${url2}/addFriend/${id}`, addFriend);