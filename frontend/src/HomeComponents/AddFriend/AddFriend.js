import React, { useState } from 'react';
import {Button, Typography, Container, TextField} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { addFriendRequest } from '../../actions/friend';
import axios from "axios";
import { useEffect } from 'react';

function AddFriend({currentId}){
    // friend to add
    const [friend, setFriend] = useState({friend_name: ''});

    const [friendId, setFriendId] = useState({newFriendId: ''});

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(addFriendRequest(currentId, friendId));
    }, [friendId])

    const AddNewFriend = async (e) => {
        e.preventDefault();
        // getting friend id
        await axios.get(`http://localhost:5000/user/byUsername/${friend.friend_name}`).then((res) => {
            if (res.data.status == 404) {
                console.log("User does not exist.");
            } else {
                // set friend id
                setFriendId(friendId => ({...friendId, newFriendId: String(res.data._id)}));
            }
        });
    }

    return (
        <div>
            <Container style = {{display: 'flex', flexDirection: 'column', alignItems: 'center'}} >
                <form id = "addFriend" style = {{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '190%'}} onSubmit={AddNewFriend}>
                    <Typography>Don't see your friends on the list?</Typography>
                    <Typography> Add them here:</Typography>
                    <TextField 
                        id ="username" 
                        label="Username" 
                        variant="outlined" 
                        size = "small" 
                        style={{ width: '60%', backgroundColor: '#EBECF0', marginBottom: '3%', radiusBorder: '10px', marginTop: '2%'}} 
                        value = {friend.friend_name}
                        onChange={(e) => setFriend(friend => ({...friend, friend_name: e.target.value}))}/>
                    <Button variant = "contained" style = {{backgroundColor: '#FFD580'}} type="submit">Add Friend</Button>
                </form>
            </Container>
        </div>
    )
}

export default AddFriend;
