import React, { useState } from 'react';
import {Button, Typography, Paper, Box, Container, TextField} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { addFriend } from '../../actions/friend';

function AddFriend({currentId}){
    const [friend, setFriend] = useState({
        friend_name: '',
        newFriendId: null    
    });

    const dispatch = useDispatch();

    const addNewFriend = (e) => {
        e.preventDefault();
        // todo: find friend_id - currently no other user to add as friend
        setFriend({...friend, newFriendId: 123})
        // currentId = current_user_id
        dispatch(addFriend(currentId, friend));

    }


    return (
        <Container style = {{marginLeft: '100px', marginTop: '5%', display: 'flex', flexDirection: 'column', alignItems: 'center'}} >
            <form id = "addFriend" style = {{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '500px'}} onSubmit={addNewFriend}>
                <Typography>Don't see your friends on the list?</Typography>
                <Typography> Add them here:</Typography>
                <TextField 
                    name="id" 
                    label="Username" 
                    variant="outlined" 
                    size = "small" 
                    style={{ width: '60%', backgroundColor: '#EBECF0', marginBottom: '10px', radiusBorder: '10px'}} 
                    value = {friend.username}
                    onChange={(e) => setFriend({ ...friend, username: e.target.value})}/>
                <Button variant = "contained" style = {{backgroundColor: '#FFD580'}} type="submit">Add Friend</Button>
            </form>
        </Container>
    )
}

export default AddFriend;
