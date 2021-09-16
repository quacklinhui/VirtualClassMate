import { DialogContent } from '@material-ui/core';
import React from 'react';
import {Button, TextField} from '@material-ui/core'
import './CreateRoomPopUp.css'
//using the library button cannot
function CreateRoomPopUp(props) {
    return (props.trigger)?(
        <div className = "CreateRoomPopUp">
            <div className = "createRoomPopUp-inner">   
                <button className = "closePopUp">x</button>
                <h2>Create Room</h2>
                <TextField id="roomName" label="Enter Room Name" variant="outlined" />
                <Button background-color = "primary">Create Room</Button>
                {props.children}
            </div>
        </div>
    ):"";
  }
  
  export default CreateRoomPopUp;