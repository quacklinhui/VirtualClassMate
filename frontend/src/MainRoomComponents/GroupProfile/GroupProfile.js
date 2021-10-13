    import React, { useState } from 'react';
    import { Link } from 'react-router-dom';
    import avatar from './../../images/VirtualClassMate_FullLogo.png';
    import {Button} from '@material-ui/core';
    import './GroupProfile.css';
    import Members from './Members.js';
    import InviteFriendsPopUp from '../InviteFriends/InviteFriendsPopUp';

function GroupProfile({id, username, avatar, hat, name}){

    const [CreateInviteFriendPopUp, setInviteFriendPopUp] = useState(false); 
    
    // function to open Join Room PopUp
    const toggleInviteFriendPopUp = () => {
        setInviteFriendPopUp(!CreateInviteFriendPopUp)
    }

    // importing avatar image
    const avatar_full = avatar+hat;
    console.log(avatar_full)
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
                <Members />
            </div>

            <div style = {{marginLeft: '45px'}}>
                <Button variant="contained" className = "invite-button" onClick={toggleInviteFriendPopUp} style={{backgroundColor: 'paleturquoise'}}>Invite Friends</Button>
                {CreateInviteFriendPopUp && <InviteFriendsPopUp handleClose = {toggleInviteFriendPopUp}></InviteFriendsPopUp>}
            </div>
            
        </div>
    )

}

export default GroupProfile
