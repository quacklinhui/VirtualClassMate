import React from 'react';
import { Link , useHistory } from 'react-router-dom';
import './AvatarBar.css';
import HomePage from '..//HomePage';
import {Button} from '@material-ui/core';

// cannot display user avatar
function AvatarBar({id, username, avatar, hat, name}) {
    
    let history = useHistory();
    function customizeAvatar() {
        history.push({
            pathname: '/newcust',
            state: {id: id, username: username , avatar: avatar, hat: hat, name: name}
        });
    };

    const avatar_full = avatar;
    console.log(avatar_full)
    let avatar_image = require("./Images/sampleAvatars/" + avatar_full + ".png")

    
    return (
        <div className = "avatarbar">
            <div className = "flexContainer-home">
                <img className = 'avatar-home' src = {avatar_image.default} alt = "avatar"></img>
                <Button variant="contained"  style = {{backgroundColor: 'rgb(161, 188, 228)', height: '15px', fontSize: '0.7rem', fontWeight: 'bold', alignSelf: 'center', width: '170px'}}className = "customizeavatar" onClick={()=>customizeAvatar()}>Customise Avatar</Button>           
            </div>
            <div className = "profile"> 
                <div>{name}</div>
                <div>@{username}</div>
            </div>
            
        </div>
    )

}

export default AvatarBar
