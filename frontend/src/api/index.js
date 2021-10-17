import axios from 'axios';

const url = 'http://localhost:5000/todo';
const url_user = 'http://localhost:5000/user';

export const fetchTodo = (referenceID) => axios.get(`${url}/${referenceID}`);
export const createTodo = (referenceID,newTodo) => axios.post(`${url}/${referenceID}`,newTodo);
export const updateTodo = (id,updatedTodo) => axios.patch(`${url}/${id}`, updatedTodo);
export const deleteTodo = (id) => axios.delete(`${url}/${id}`);

export const addFriend = (id, addFriend) => axios.patch(`${url_user}/addFriend/${id}`, addFriend);
