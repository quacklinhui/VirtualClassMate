import React from 'react';
import './AvatarBar.css';
import avatar from './../../images/VirtualClassMate_FullLogo.png';
import {Button} from '@material-ui/core';

function AvatarBar(){
    return (
        <div className = "avatarbar">
            <div className = "flexContainer"> 
                <img className = 'avatar' src = {avatar} alt = "avatar"></img>
                <Button variant="contained"  style = {{backgroundColor: 'rgb(161, 188, 228)', height: '15px', marginTop: '20px', fontSize: '0.7rem', fontWeight: 'bold', alignSelf: 'center'}}className = "customizeavatar">Customise Avatar</Button>
            </div>
            
        </div>
    )

}

export default AvatarBar
