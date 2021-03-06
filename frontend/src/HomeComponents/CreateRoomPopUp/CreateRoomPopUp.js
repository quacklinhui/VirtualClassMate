import React, { useState, useEffect } from 'react';
import {Button, TextField, IconButton, CircularProgress, Typography} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close';
import './CreateRoomPopUp.css'
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

const useStyles = makeStyles(theme => ({
    root : {
        "& .MuiFormLabel-root": {
            color: 'white'
        },
        "& .MuiOutlinedInput-notchedOutline": {
            borderColor : 'white'
        },
        "& .MuiOutlinedInput-root.Mui-focused": {
            borderColor: 'white'
        }
    }
}))

//using the library button cannot
function CreateRoomPopUp(props) {

    const classes = useStyles();

    const [room, setRoom] = useState({
        name: '',
        description: '',
        admin: ''
    })

    const [submit, setSubmit] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    useEffect(async () => {
        if (submit) {
            if (room.name!=''&room.description!=''){
                await axios.post(`http://localhost:5000/room/`, room);
                setSubmit(false);
                props.handleClose();
                props.rerender();
            } else{
                setErrorMsg("Error! Please input a valid room name and room description!")
            }
        }
    }, [room, submit])

    return (
        <div className = "CreateRoomPopUp">
            <div className = "createRoomPopUp-inner"> 
                <IconButton className = "closePopUp" onClick={props.handleClose}>
                    <CloseIcon/>
                </IconButton>
                <h1>Create Room</h1>
                <div>
                <TextField className = {classes.root} id="roomName" label="Enter Room Name" variant="outlined" style={{ width: '100%', height:80, color: 'white'}} value = {room.name} onChange={(e) => setRoom(room => ({...room, name: e.target.value, admin: props.userId}))}/>
                <TextField className = {classes.root} id="roomDesc" label="Enter Room Description" variant="outlined" style={{ width: '100%', height:80}} value = {room.description} onChange = {(e) => setRoom(room => ({...room, description: e.target.value}))}/>
                </div>
                {!submit ? <Button style={{backgroundColor:'#482FAF', padding: 10, color: 'white'}} onClick={() => {setSubmit(true);}}>Create Room</Button> : 
                //Displaying the error message
                <>
                    <Button style={{backgroundColor:'#482FAF', padding: 10, color: 'white'}} onClick={() => {setSubmit(true);}}>Create Room</Button>
                    <Typography>
                        {errorMsg}
                    </Typography>
                </>
                // <CircularProgress style = {{'color': 'lavender', 'marginTop': '3%'}}/>
                }
            </div>
        </div>
    );
  }
  
export default CreateRoomPopUp;