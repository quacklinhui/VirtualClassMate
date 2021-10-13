import React, { useEffect } from "react";
import {useState} from 'react';
import {IconButton,Button, Typography, Paper, Box, Container, TextField} from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import SendIcon from '@material-ui/icons/Send';
import CloseIcon from '@material-ui/icons/Close';
const ChatBox = () => {
    const [showChatBox, setShowChatBox] = React.useState(false)
    const [minimiseChatBox, setMinimiseChatBox] = React.useState(false)
    return(
        <Paper style={{position:"absolute", right:"2vw",bottom:"0",width:"12vw", backgroundColor: '#8A2BE290', height:50, bottomPadding:20}} >
<IconButton style={{left: 5, position:"absolute"}}>
                        <CloseIcon/>
                    </IconButton>
                    Chat
                    <IconButton onClick={()=>{minimiseChatBox?setMinimiseChatBox(false): setMinimiseChatBox(true)}}>
                    { minimiseChatBox ? <ArrowDropDownIcon style={{ color:"black"}}/> : <ArrowDropUpIcon style={{ color:"white"}}/>  }
                    </IconButton>


                {/* { minimiseChatBox ? null: null } */}
                <Paper style = {{backgroundColor: 'white', display: "flex",flexDirection: 'row', height:50, padding:5}}>
                <TextField fullWidth id="chatInput" variant="outlined" size = 'small'  /> 
                 <Button type = "submit" style ={{backgroundColor:'#DCDCDC', margin:5}}>
                    <SendIcon/>
                  </Button>
                </Paper>
          </Paper>
    );
}

export default ChatBox;