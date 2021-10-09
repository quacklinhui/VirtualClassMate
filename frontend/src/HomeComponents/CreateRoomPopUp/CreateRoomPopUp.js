import { DialogContent } from '@material-ui/core';
import React from 'react';
import {Button, TextField,TextareaAutosize, IconButton} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close';
//import { AiFillCaretDown, AiOutlineClose } from 'react-icons/ai';
import './CreateRoomPopUp.css'
//using the library button cannot
function CreateRoomPopUp(props) {
    return (
        <div className = "CreateRoomPopUp">
            <div className = "createRoomPopUp-inner">   
                <IconButton className = "closePopUp" onClick={props.handleClose}>
                    <CloseIcon/>
                </IconButton>
                <h1>Create Room</h1>
                <div>
                <TextField id="roomName" label="Enter Room Name" variant="outlined" style={{ width: '100%', height:80}}/>
                <TextField id="roomDesc" label="Enter Room Description" variant="outlined" style={{ width: '100%', height:80}}/>
                </div>
                <br></br>
                <Button style={{backgroundColor:'#DCDCDC', padding: 10, color: 'white'}} onClick={props.handleClose}>Create Room</Button>
                {props.children}
            </div>
        </div>
    );
  }
  
export default CreateRoomPopUp;