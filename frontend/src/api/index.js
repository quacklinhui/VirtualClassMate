import axios from 'axios';

const url = 'http://localhost:5000/todo';
const url_user = 'http://localhost:5000/user';

export const fetchPersonalTodo = (referenceID) => axios.get(`${url}/user/${referenceID}`);
export const fetchGroupTodo = (referenceID) => axios.get(`${url}/room/${referenceID}`);
export const createPersonalTodo = (referenceID,newTodo) => axios.post(`${url}/user/${referenceID}`,newTodo);
export const createGroupTodo = (referenceID,newTodo) => axios.post(`${url}/room/${referenceID}`,newTodo);
export const updateTodo = (id,updatedTodo) => axios.patch(`${url}/${id}`, updatedTodo);
export const deleteTodo = (id) => axios.delete(`${url}/${id}`);
export const completeTodo = (id) => axios.delete(`${url}/${id}`);

export const addFriendRequest = (id, addFriendRequest) => axios.patch(`${url_user}/addFriendRequest/${id}`, addFriendRequest);
