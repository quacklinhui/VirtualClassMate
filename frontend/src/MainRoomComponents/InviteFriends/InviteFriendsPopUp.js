import React, { useState, useEffect } from 'react';
import './InviteFriendsPopUp.css'
import axios from 'axios';
import CloseIcon from '@material-ui/icons/Close';
import {IconButton, CircularProgress} from '@material-ui/core'
import Friends from './Friends';

function InviteFriendsPopUp(props) {

    const [friendList, setFriendList] = useState([]);
    const friendIdList = [];
    const [rerenderList, setRerenderList] = useState(true);

    // get friends that user will be able to add
    useEffect( async () => {
        await axios.get(`http://localhost:5000/room/check?rid=${props.roomId}&uid=${props.userId}`).then((res) => {
            friendIdList.push(res.data)
        })
        if (friendIdList.length > 0) {
            setFriendList(friendList => friendIdList)
        }
    }, [rerenderList])

    const [friendNameList, setFriendNameList] = useState([]);
    var friend_NameList = []
    const [loading, setLoading] = useState(false)
    
    function checkLoaded() {
        if (friendNameList.length != 0) {
            setLoading(loading => true)
            setRerenderList(false);
        } else if (friend_NameList.length == 0 && friendNameList.length == 0) {
            setLoading(loading => true)
            setRerenderList(false);
        }
    }

    // rerender list 
    const rerenderFriendList = () => {
        setRerenderList(true)
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
            if (friend_NameList.length > 0) {
                setFriendNameList(friendNameList => friend_NameList)
            }       
        }
        setTimeout(checkLoaded, 5000)
    }, [friendList])

    // function on close pop up 
    // used to rerender room as well
    const closePopUp = () => {
        props.handleClose();
        props.rerenderRoom();
    }
    
    return (
        <div className = "InviteFriendPopUp">
            <div className = "popup-inner">   
                <IconButton className = "closePopUp" onClick={closePopUp}>
                    <CloseIcon/>
                </IconButton>
                <h1>Invite Friends</h1>
                <div className = "friendsToAdd">
                    {loading ? ((props.roomAdmin !== props.userId) ? <Friends userId = {props.userId} isAdmin = 'false'/> : (!friendNameList.length ? <Friends isFriend = 'false' isAdmin = 'true'/> : friendNameList.map((friend) => <Friends key = {friend._id} friendId = {friend._id} name = {friend.name} userId = {props.userId} roomId = {props.roomId} isFriend='true' rerenderList = {rerenderFriendList} isAdmin = 'true'/>))): (
                        <CircularProgress style = {{'color': 'lavender', 'marginLeft': '45%', 'marginTop': '5%'}}/>
                    )}
                </div>
            </div>
        </div>
    );
  }
  
export default InviteFriendsPopUp;
