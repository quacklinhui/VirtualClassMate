import React from 'react';
import './JoinRoomPopUp.css'
import {useHistory} from "react-router-dom";
import { IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close'


//using the library button cannot
function JoinRoomPopUp(props) {
    return (
        <div className = "JoinRoomPopUp">
            <div className = "joinRoomPopUp-inner">   
                <IconButton className = "closePopUp" onClick={props.handleClose}>
                    <CloseIcon/>
                </IconButton>
                <h1>Join a Room</h1>
                
            </div>
        </div>
    );      
  }
  
export default JoinRoomPopUp;