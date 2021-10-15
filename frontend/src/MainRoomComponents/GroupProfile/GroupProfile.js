    import React, { useState } from 'react';
    import {Button} from '@material-ui/core';
    import './GroupProfile.css';
    import Members from './Members.js';
    import InviteFriendsPopUp from '../InviteFriends/InviteFriendsPopUp';

function GroupProfile({id, username, avatar, hat, name, roomId}){

    const [CreateInviteFriendPopUp, setInviteFriendPopUp] = useState(false); 
    
    // function to open Join Room PopUp
    const toggleInviteFriendPopUp = () => {
        setInviteFriendPopUp(!CreateInviteFriendPopUp)
    }

    // importing avatar image
    const avatar_full = avatar+hat;
    let avatar_image = require("../../HomeComponents/AvatarBar/Images/sampleAvatars/" + avatar_full + ".png")

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
                <Members roomId = {roomId}/>
            </div>
            <div style = {{marginLeft: '67px'}}>
                <Button variant="contained" className = "invite-button" onClick={toggleInviteFriendPopUp} style={{backgroundColor: 'paleturquoise'}}>Invite Friends</Button>
                {CreateInviteFriendPopUp && <InviteFriendsPopUp roomId = {roomId} userId = {id} handleClose = {toggleInviteFriendPopUp}></InviteFriendsPopUp>}
            </div>
            
        </div>
    )

}

export default GroupProfile
