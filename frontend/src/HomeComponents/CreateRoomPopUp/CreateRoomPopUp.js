import { DialogContent } from '@material-ui/core';
import React from 'react';
import {Button} from '@material-ui/core'
import './CreateRoomPopUp.css'
//using the library button cannot
function CreateRoomPopUp(props) {
    return (props.trigger)?(
        <div className = "CreateRoomPopUp">
            <div className = "createRoomPopUp-inner">   
                <button className = "closePopUp"></button>
                {props.children}
            </div>
        </div>
    ):"";
  }
  
  export default CreateRoomPopUp;