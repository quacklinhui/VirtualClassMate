import React, { useEffect } from "react";
import {useState, useRef } from 'react';
import {IconButton,Button, Typography, Paper, Box, Container, TextField} from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import SendIcon from '@material-ui/icons/Send';
import CloseIcon from '@material-ui/icons/Close';
import ChatMessage from "./ChatMessage";
import axios from "axios";
import { io } from "socket.io-client";

const ChatBox = (props) => {
    const [showChatBox, setShowChatBox] = React.useState(false)
    const [minimiseChatBox, setMinimiseChatBox] = React.useState(false)
    const [messages, setMessages] = useState([]);
    const [newChatMessage, setNewChatMessage] = useState("");
    const scrollRef = useRef();

    // Socket
    // const [socket, setSocket] = useState(null);
    // const socket = useRef(io("ws://localhost:8900"));
    // const socket = useRef();
    const socket = props.socketId;
    const [arrivalMessage, setArrivalMessage] = useState(null);
    // useEffect(() => {
    //     setSocket(io("ws://localhost:8900"))
    // }, []);

    console.log(socket)

    useEffect(() => {
        socket.current.on("getMessage", async (data) => {
            try{
                const res = await axios.get(`http://localhost:5000/user/${data.user}`);
                setArrivalMessage({
                    user: data.user,
                    room: data.room,
                    message: data.message,
                    createdAt: new Date(),
                    username: res.data.name
                })
            } catch (err) {
                console.log(err);
            }
        });
    }, []);

    useEffect(() => {
        arrivalMessage &&
            arrivalMessage.room === props.roomId &&
            setMessages((prev) => [...prev, arrivalMessage]);
    }, [arrivalMessage, props.roomId]);

    // useEffect(() => {
    //     socket.current.emit("joinRoom", { userId: props.id, roomId: props.roomId });
        
    //   }, [props.id, props.roomId]);

    useEffect(() => {
        const getMessages = async () => {
            try {
                // Get all the chat messages for this room
                const res = await axios.get(`http://localhost:5000/chat/${props.roomId}`);


                var messagesData = res.data;
                // console.log(messagesData)

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

        socket.current.emit("sendMessage", newChatMessage);

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
        <Paper style={{position:"absolute", right:"2vw",width:"19vw", height: "20vw" ,bottomPadding:20}} >
            <Paper style={{backgroundColor: '#140650', color: "white", position: 'relative', height: '2vw'}}>
                <div style = {{marginLeft: '1vw', lineHeight: '2vw', verticalAlign: 'middle'}}>CHAT</div>
            </Paper>

            <Paper>
                <Paper style = {{backgroundColor: 'white', display: "flex",flexDirection: 'column', height:"18vw", padding:5, overflowY:"scroll",  position: 'relative'}}>

                    {messages.map((m) => (
                        <div ref={scrollRef}>
                            <ChatMessage message={m} own={m.user === props.id}/>
                        </div>
                    ))}
                                    
                </Paper>
                <Paper style = {{backgroundColor: 'white', display: "flex",flexDirection: 'row', height: "3vw", padding:5}}>
                    <TextField
                        fullWidth id="chatInput" 
                        variant="outlined" 
                        size = 'small' 
                        placeholder="Write message" 
                        onChange={(e) => setNewChatMessage(e.target.value)} 
                        value={newChatMessage} 
                        style = {{margin: 5}} />
                    <Button 
                        type = "submit" 
                        onClick={handleSubmit}
                        style ={{backgroundColor:'#DCDCDC', margin:5}}>
                        <SendIcon/>
                    </Button>
                </Paper>
            </Paper>

          </Paper>
    );
}

export default ChatBox;