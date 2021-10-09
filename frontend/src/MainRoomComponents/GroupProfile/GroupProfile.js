    import React, { useState } from 'react';
    import { Link } from 'react-router-dom';
    import avatar from './../../images/VirtualClassMate_FullLogo.png';
    import {Button} from '@material-ui/core';
    import './GroupProfile.css';
    import Members from './Members.js';
    import InviteFriendsPopUp from '../InviteFriends/InviteFriendsPopUp';

function GroupProfile(){

    const [CreateInviteFriendPopUp, setInviteFriendPopUp] = useState(false); 
    
    return (
        <div className = "friendbar">
            <div className = "flexContainer"> 
                <img className = 'avatar' src = {avatar} alt = "avatar"></img>
                <Link to = "/newcust">
                <Button variant="contained"  style = {{backgroundColor: 'rgb(161, 188, 228)', height: '15px', marginTop: '20px', fontSize: '0.7rem', fontWeight: 'bold', alignSelf: 'center'}} className = "customizeavatar">Customise Avatar</Button>
                </Link>            
            </div>
            <div className = "user-details"> 
                <div>name</div>
                <div>@username</div>
            </div>
            <div>
                <Members />
            </div>
            <div style = {{marginLeft: '45px'}}>
                <Button variant="contained" className = "invite-button" onClick={() => {setInviteFriendPopUp(true)}}>Invite Friends</Button>
                <InviteFriendsPopUp trigger = {CreateInviteFriendPopUp} setTrigger = {setInviteFriendPopUp}/>
            </div>
            
        </div>
    )

}

export default GroupProfile
