import React, { useEffect } from "react";
import {useState, useRef } from 'react';
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
    const [newChatMessage, setNewChatMessage] = useState("");
    const scrollRef = useRef();

    useEffect(() => {
        const getMessages = async () => {
            try {
                // Get all the chat messages for this room
                const res = await axios.get(`http://localhost:5000/chat/${props.roomId}`);

                var messagesData = res.data;

                // Find the username of each chat message
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

    useEffect(() => {
        scrollRef.current?.scrollIntoView({behavior: "smooth"});
    }, [messages]);

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const message = {
            userID: props.id,
            message: newChatMessage
        };

        try {
            // Create message
            const res = await axios.post(`http://localhost:5000/chat/${props.roomId}`, message);
            var newMessage = res.data;
            // Find username of user
            const userRes = await axios.get(`http://localhost:5000/user/${newMessage.user}`);
            newMessage = { ...newMessage, username: userRes.data.name };
            setMessages([...messages, newMessage]);
            setNewChatMessage("");
        } catch (err) {
            console.log(err);
        }
    };

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
                                        <div ref={scrollRef}>
                                            <ChatMessage message={m} own={m.user === props.id}/>
                                        </div>
                                    ))}
                                    
                                </Paper>
                                <Paper style = {{backgroundColor: 'white', display: "flex",flexDirection: 'row', height:50, padding:5}}>
                                    <TextField
                                        fullWidth id="chatInput" 
                                        variant="outlined" 
                                        size = 'small' 
                                        placeholder="Write message" 
                                        onChange={(e) => setNewChatMessage(e.target.value)} 
                                        value={newChatMessage} />
                                    <Button 
                                        type = "submit" 
                                        onClick={handleSubmit}
                                        style ={{backgroundColor:'#DCDCDC', margin:5}}>
                                        <SendIcon/>
                                    </Button>
                                </Paper>
                            </Paper>
                : null }

          </Paper>
    );
}

export default ChatBox;