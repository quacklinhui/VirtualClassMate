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
        <Paper style={{position:"absolute", right:"2vw",bottom:"0",width:"12vw",  bottomPadding:20}} >
                    <Paper style={{backgroundColor: '#8A2BE290',}}>
                        CHAT
                    <IconButton disableRipple disableFocusRipple onClick={()=>{minimiseChatBox?setMinimiseChatBox(false): setMinimiseChatBox(true)}} style={{backgroundColor:"transparent", position: "relative"}}>
                        { minimiseChatBox ? <ArrowDropDownIcon  style={{ color:"black"}}/> : <ArrowDropUpIcon disableRipple disableFocusRipple style={{ color:"white"}}/>  }
                    </IconButton>
                    </Paper>



                { minimiseChatBox ? 
                             <Paper>
                                <Paper style = {{backgroundColor: 'white', display: "flex",flexDirection: 'row', height:200, padding:5}}>
                                to input the chat here
                                </Paper>
                                <Paper style = {{backgroundColor: 'white', display: "flex",flexDirection: 'row', height:50, padding:5}}>
                                    <TextField fullWidth id="chatInput" variant="outlined" size = 'small'  /> 
                                    <Button type = "submit" style ={{backgroundColor:'#DCDCDC', margin:5}}>
                                        <SendIcon/>
                                    </Button>
                                </Paper>
                            </Paper>
                : null }

          </Paper>
    );
}

export default ChatBox;