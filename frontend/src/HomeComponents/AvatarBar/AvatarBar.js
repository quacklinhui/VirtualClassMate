import React from 'react';
import { Link } from 'react-router-dom';
import './AvatarBar.css';
import HomePage from '..//HomePage';
import avatar from './../../images/VirtualClassMate_FullLogo.png';
import {Button} from '@material-ui/core';

function AvatarBar(){
    return (
        <div className = "avatarbar">
            <div className = "flexContainer"> 
                <img className = 'avatar' src = {avatar} alt = "avatar"></img>
                <Link to = "/newcust">
                <Button variant="contained"  style = {{backgroundColor: 'rgb(161, 188, 228)', height: '15px', marginTop: '20px', fontSize: '0.7rem', fontWeight: 'bold', alignSelf: 'center'}}className = "customizeavatar">Customise Avatar</Button>
                </Link>            
            </div>
            <div className = "flexContainer"> 
                <div>name</div>
                <div>@username</div>
            </div>
            
        </div>
    )

}

export default AvatarBar
