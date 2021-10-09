import React from 'react';
import './JoinRoomPopUp.css'
import {useHistory} from "react-router-dom";


//using the library button cannot
function JoinRoomPopUp(props) {
    return (
        <div className = "JoinRoomPopUp">
            <div className = "joinRoomPopUp-inner">   
                <button className = "closePopUp" onClick={props.handleClose}>x</button>
                <h1>Join a Room</h1>
            </div>
        </div>
    );      
  }
  
export default JoinRoomPopUp;