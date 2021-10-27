import * as api from '../api';

//Action Creators
export const getPersonalTodo = (referenceID) => async(dispatch) => {
    try {
        const {data} = await api.fetchPersonalTodo(referenceID);

        dispatch({type: 'FETCH_USER', payload:data});
    } catch (error) {
        console.log(error.message);
    }
}
export const getGroupTodo = (referenceID) => async(dispatch) => {
    try {
        const {data} = await api.fetchGroupTodo(referenceID);

        dispatch({type: 'FETCH_GROUP', payload:data});
    } catch (error) {
        console.log(error.message);
    }
}
export const createPersonalTodo = (referenceID,post) => async(dispatch) => {
    try {
        const {data} = await api.createPersonalTodo(referenceID,post);

        dispatch({type: 'CREATE', payload:data});
    } catch (error) {
        console.log(error.message);
    }
}
export const createGroupTodo = (referenceID,post) => async(dispatch) => {
    try {
        const {data} = await api.createGroupTodo(referenceID,post);

        dispatch({type: 'CREATE_GROUP', payload:data});
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

export const updateGroupTodo = (id,post) => async(dispatch) => {
    try {
        const {data} = await api.updateTodo(id,post);

        dispatch({type: 'UPDATE_GROUP', payload:data});
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

export const deleteGroupTodo = (id) => async(dispatch) => {
    try {
        api.deleteTodo(id);
        
        dispatch({type: 'DELETE_GROUP', payload:id});
    } catch (error) {
        console.log(error.message);
    }
}

export const completeTodo = (id) => async(dispatch) => {
    try {
        api.completeTodo(id);
        
        dispatch({type: 'DELETE', payload:id});
    } catch (error) {
        console.log(error.message);
    }
}