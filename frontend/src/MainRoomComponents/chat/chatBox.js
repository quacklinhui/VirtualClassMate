import React, { useEffect } from "react";
import {useState} from 'react';
import {IconButton,Button, Typography, Paper, Box, Container, TextField} from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import SendIcon from '@material-ui/icons/Send';
import CloseIcon from '@material-ui/icons/Close';
import ChatMessage from "./ChatMessage";
import axios from "axios";

const ChatBox = (props) => {
    const [showChatBox, setShowChatBox] = React.useState(false)
    const [minimiseChatBox, setMinimiseChatBox] = React.useState(false)
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const getMessages = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/chat/${props.roomId}`);

                var messagesData = res.data;
                for (const index in messagesData) {
                    const userRes = await axios.get(`http://localhost:5000/user/${messagesData[index].user}`);
                    messagesData[index] = { ...messagesData[index], username: userRes.data.name };
                }
                setMessages(messagesData);
            } catch(err) {
                console.log(err);
            }
        }
        getMessages();
    }, []);

    return(
        <Paper style={{position:"absolute", right:"2vw",bottom:"0",width:"19vw",  bottomPadding:20}} >
                    <Paper style={{backgroundColor: '#140650', color: "white", zIndex: '500', position: 'relative'}}>
                        CHAT
                    <IconButton disableRipple disableFocusRipple onClick={()=>{minimiseChatBox?setMinimiseChatBox(false): setMinimiseChatBox(true)}} style={{backgroundColor:"transparent", position: "relative"}}>
                        { minimiseChatBox ? <ArrowDropDownIcon  style={{ color:"white"}}/> : <ArrowDropUpIcon disableRipple disableFocusRipple style={{ color:"white"}}/>  }
                    </IconButton>
                    </Paper>

                { minimiseChatBox ? 
                             <Paper>
                                <Paper style = {{backgroundColor: 'white', display: "flex",flexDirection: 'column', height:400, padding:5, overflowY:"scroll", zIndex: '500', position: 'relative'}}>
                                
                                    {/* <Paper style={{backgroundColor:'grey',padding: 12, borderRadius:30, alignSelf: 'flex-end'}}>
                                        to input the chat here
                                    </Paper> */}

                                    {messages.map((m) => (
                                        <ChatMessage message={m} own={m.user === props.id}/>
                                    ))}
                                    
                                </Paper>
                                <Paper style = {{backgroundColor: 'white', display: "flex",flexDirection: 'row', height:50, padding:5}}>
                                    <TextField fullWidth id="chatInput" variant="outlined" size = 'small' placeholder="Write message" /> 
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