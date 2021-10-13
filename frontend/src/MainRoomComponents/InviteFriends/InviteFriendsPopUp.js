import React from 'react';
import './InviteFriendsPopUp.css'
import CloseIcon from '@material-ui/icons/Close';
import {Button, TextField,TextareaAutosize, IconButton} from '@material-ui/core'
function InviteFriendsPopUp(props) {


    return (
        <div className = "InviteFriendPopUp">
            <div className = "popup-inner">   
                <IconButton className = "closePopUp" onClick={props.handleClose}>
                    <CloseIcon/>
                </IconButton>
                <h1>Invite Friends</h1>
            </div>
        </div>
    );
  }
  
export default InviteFriendsPopUp;