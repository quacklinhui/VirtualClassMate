import axios from 'axios';

const url = 'http://localhost:5000/todo';

export const fetchTodo = () => axios.get(url);
export const createTodo = (newTodo) => axios.post(url,newTodo);
