import { DialogContent } from '@material-ui/core';
import React from 'react';
import {Button, TextField,TextareaAutosize} from '@material-ui/core'
import './CreateRoomPopUp.css'
//using the library button cannot
function CreateRoomPopUp(props) {
    return (props.trigger)?(
        <div className = "CreateRoomPopUp">
            <div className = "createRoomPopUp-inner">   
                <button className = "closePopUp" onClick={()=>props.setTrigger(false)}>x</button>
                <h1>Create Room</h1>
                <div>
                <TextField id="roomName" label="Enter Room Name" variant="outlined" style={{ width: '100%', height:80}}/>
                <TextField id="roomName" label="Enter Room Description" variant="outlined" style={{ width: '100%', height:80}}/>
                </div>
                <br></br>
                <Button style={{backgroundColor:'grey', padding: 10, color: 'white'}} onClick={()=>props.setTrigger(false)}>Create Room</Button>
                {props.children}
            </div>
        </div>
    ):"";
  }
  
  export default CreateRoomPopUp;