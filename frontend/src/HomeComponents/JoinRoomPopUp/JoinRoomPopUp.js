import React, { useEffect, useState } from 'react';
import './JoinRoomPopUp.css'
import { IconButton, CircularProgress } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close'
import FriendRooms from './FriendRooms';
import axios from 'axios'

function JoinRoomPopUp(props) {

    const [friendList, setFriendList] = useState([]);
    const friendIdList = [];
    const [rerender, setRerender] = useState(true)

    //get friends of user
    useEffect(async () => {
        await axios.get(`http://localhost:5000/user/${props.userId}`).then((res) => {
            friendIdList.push(res.data.friends)
        })
        setFriendList(friendList => friendIdList)
    }, [rerender])

    const [friendNameList, setFriendNameList] = useState([])
    var friend_NameList = []
    const [loading, setLoading] = useState(false)
    
    function checkLoaded() {
        if (friendNameList.length != 0) {
            setLoading(true);
            setRerender(false);
        } else if (friend_NameList.length == 0 && friendNameList.length == 0) {
            setLoading(true);
            setRerender(false);
        }
        
    }

    // get friend name
    useEffect( async () => {
        if (friendList.length == 1){
            for (let i = 0; i < friendList[0].length; i++) {
                await axios.get(`http://localhost:5000/user/${friendList[0][i]}`).then((res) => {
                    const {_id, name, username, password, email, toDoList, rooms, avatarID1, avatarID2, friends, __v} = res.data;
                    friend_NameList.push({_id, name, username, password, email, toDoList, rooms, avatarID1, avatarID2, friends, __v})
                })
            }       
        }
        if (friend_NameList.length > 0){
            setFriendNameList(friendNameList => friend_NameList)
        }
        setTimeout(checkLoaded, 5000)
    }, [friendList])

    

    return (
        <div className = "JoinRoomPopUp">
            <div className = "joinRoomPopUp-inner">   
                <IconButton className = "closePopUp" onClick={props.handleClose}>
                    <CloseIcon/>
                </IconButton>
                <h1>Join a Room</h1>
                <div className = "container">
                {loading ? (!friendNameList.length ? <FriendRooms haveFriend = 'false'/> : friendNameList.map((friend) => <FriendRooms key = {friend._id} friendId = {friend._id} friendName = {friend.name} friendRooms = {friend.rooms} userId = {props.userId} haveFriend='true'/>)): (
                        <CircularProgress style = {{'color': 'lavender', 'marginLeft': '45%', 'marginTop': '3%'}}/>
                    )}
                </div>
            </div>
        </div>
    );      
  }
  
export default JoinRoomPopUp;