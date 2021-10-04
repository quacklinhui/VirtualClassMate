import * as api from '../api';

//Action Creators
export const getTodo = () => async(dispatch) => {
    try {
        const {data} = await api.fetchTodo();

        dispatch({type: 'FETCH_ALL', payload:data});
    } catch (error) {
        console.log(error.message);
    }
}
export const createTodo = (post) => async(dispatch) => {
    try {
        const {data} = await api.createTodo(post);

        dispatch({type: 'CREATE', payload:data});
    } catch (error) {
        console.log(error.message);
    }
}
export const updateTodo = (id,post) => async(dispatch) => {
    try {
        const {data} = await api.updateTodo(id,post);

        dispatch({type: 'UPDATE', payload:data});
    } catch (error) {
        console.log(error.message);
    }
}
export const deleteTodo = (id) => async(dispatch) => {
    try {
        api.deleteTodo(id);
        
        dispatch({type: 'DELETE', payload:id});
    } catch (error) {
        console.log(error.message);
    }
}