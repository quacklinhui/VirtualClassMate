import * as api from '../api';

//Action Creators
export const addFriendRequest = (user_id, friend) => async (dispatch) => {
    try {
        const { data } = await api.addFriendRequest(user_id, friend);

        dispatch({ type: 'UPDATE', payload: data});
    } catch (error) {
        console.log(error.message);
    }
}
