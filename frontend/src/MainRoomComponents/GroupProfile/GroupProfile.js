    import React, { useState } from 'react';
    import {Button} from '@material-ui/core';
    import './GroupProfile.css';
    import Members from './Members.js';
    import InviteFriendsPopUp from '../InviteFriends/InviteFriendsPopUp';
    import RoomJoinRequestPopUp from '../RoomJoinRequest/RoomJoinRequestPopUp';

function GroupProfile({id, username, avatar, name, roomId, onlineMembers, rerenderRoom, rerender, stopRerenderRoom, roomAdmin}){

    const [CreateInviteFriendPopUp, setInviteFriendPopUp] = useState(false); 
    const [CreateAddFriendPopUp, setAddFriendPopUp] = useState(false); 
    
    // function to open Invite Friend PopUp
    const toggleInviteFriendPopUp = () => {
        setInviteFriendPopUp(!CreateInviteFriendPopUp)
    }

    // to open Join Room Request List
    const toggleAddFriendPopUp = () => {
        setAddFriendPopUp(!CreateAddFriendPopUp)
    }

    // to rerender room 
    const rerenderEntireRoom = () => {
        rerenderRoom();
    }

    // to stop rerender of room
    const stopRerender = () => {
        stopRerenderRoom();
    }

    // importing avatar image
    let avatar_image = require("../../HomeComponents/AvatarBar/Images/sampleAvatars/" + avatar + ".png")

    return (
        <div className = "friendbar">
            <div className = "flexContainer"> 
                <img className = 'avatar' src = {avatar_image.default} alt = "avatar"></img>          
            </div>
            <div className = "user-details"> 
                <div>{name}</div>
                <div>@{username}</div>
            </div>
            <div>
                <Members roomId = {roomId} onlineMembers = {onlineMembers} currentUserId = {id} rerender = {rerender} stopRerender = {stopRerender}/>
            </div>
            <div style = {{marginLeft: '2.5%', display: 'flex', flexDirection: 'column'}}>
                <Button variant="contained" className = "invite-button" onClick={toggleInviteFriendPopUp} style={{backgroundColor: 'paleturquoise', marginBottom: '20px'}}>Invite Friends</Button>
                {CreateInviteFriendPopUp && <InviteFriendsPopUp roomId = {roomId} userId = {id} roomAdmin = {roomAdmin} handleClose = {toggleInviteFriendPopUp} rerenderRoom = {rerenderEntireRoom}></InviteFriendsPopUp>}
                <Button variant="contained" className = "joinRoomRequest" onClick={toggleAddFriendPopUp} style={{backgroundColor: 'white'}}>Requests To Join Room</Button>
                {CreateAddFriendPopUp && <RoomJoinRequestPopUp roomId = {roomId} userId = {id} roomAdmin = {roomAdmin} handleClose = {toggleAddFriendPopUp} rerenderRoom = {rerenderEntireRoom}/>}
            </div>
            
        </div>
    )

}

export default GroupProfile
