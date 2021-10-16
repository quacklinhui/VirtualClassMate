import React, { useState } from 'react';
import {Button, Typography, Paper, Box, Container, TextField} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { addFriend } from '../../actions/friend';
import axios from "axios";
import { getUserByUsername } from '../../api';
import { useEffect } from 'react';

function AddFriend({currentId}){
    // friend to add
    const [friend, setFriend] = useState({friend_name: ''});

    const [friendId, setFriendId] = useState({newFriendId: ''});

    const dispatch = useDispatch();
    
    //can use to delete wrong friends
    /*const [nullfriend, setnullfriend] = useState({
        oldFriendId: '6166cd3b4b65f0462403cefa'
    });

    const deleteFriend = (e) => {
        e.preventDefault();
        const getfriend = `http://localhost:5000/user/deleteFriend/${currentId}`
        axios.patch(getfriend, nullfriend)
    }; */

    useEffect(() => {
        dispatch(addFriend(currentId, friendId));
    }, [friendId])

    const AddNewFriend = async (e) => {
        e.preventDefault();
        // getting friend id - not working
        axios.get(`http://localhost:5000/user/byUsername/${friend.friend_name}`).then( (res) => {
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
            <Container style = {{marginLeft: '100px', marginTop: '15%', display: 'flex', flexDirection: 'column', alignItems: 'center'}} >
                <form id = "addFriend" style = {{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '500px'}} onSubmit={AddNewFriend}>
                    <Typography>Don't see your friends on the list?</Typography>
                    <Typography> Add them here:</Typography>
                    <TextField 
                        name="id" 
                        label="Username" 
                        variant="outlined" 
                        size = "small" 
                        style={{ width: '60%', backgroundColor: '#EBECF0', marginBottom: '10px', radiusBorder: '10px', marginTop: '10px'}} 
                        value = {friend.friend_name}
                        onChange={(e) => setFriend(friend => ({...friend, friend_name: e.target.value}))}/>
                    <Button variant = "contained" style = {{backgroundColor: '#FFD580'}} type="submit">Add Friend</Button>
                </form>
                <div style = {{position: 'relative', width: '300px', textAlign: 'center', marginTop: '10px'}}>
                </div>
            </Container>
            
        </div>
    )
}

export default AddFriend;
