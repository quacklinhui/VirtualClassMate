import * as api from '../api';

//Action Creators
export const addFriend = (id) => async (dispatch) => {
    try {
        const { data } = await api.addFriend(id);

        dispatch({ type: 'UPDATE', payload: data});
    } catch (error) {
        console.log(error.message);
    }
}