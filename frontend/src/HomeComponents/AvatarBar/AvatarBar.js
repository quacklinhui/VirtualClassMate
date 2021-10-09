import React from 'react';
import { Link , useHistory } from 'react-router-dom';
import './AvatarBar.css';
import HomePage from '..//HomePage';
import {Button} from '@material-ui/core';

// cannot display user avatar
function AvatarBar({id, username, avatar, hat}) {
    const avatar_full = avatar+hat;
    let history = useHistory();
    console.log('avatar: ' + username)
    function customizeAvatar() {
        history.push({
            pathname: '/newcust',
            state: {id: id, username: username , avatar: avatar, hat: hat}
        });
    }

    return (
        <div className = "avatarbar">
            <div className = "flexContainer">
                <img className = 'avatar' src = {'./Images/sampleAvatars/'+ avatar_full + '.png'} alt = "avatar"></img>
                <Button variant="contained"  style = {{backgroundColor: 'rgb(161, 188, 228)', height: '15px', marginTop: '20px', fontSize: '0.7rem', fontWeight: 'bold', alignSelf: 'center'}}className = "customizeavatar" onClick={()=>customizeAvatar()}>Customise Avatar</Button>           
            </div>
            <div className = "profile"> 
                <div>Alicia</div>
                <div>@{username}</div>
            </div>
            
        </div>
    )

}

export default AvatarBar
