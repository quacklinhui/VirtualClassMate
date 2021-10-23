import React, { useEffect, useRef } from "react";
import {IconButton,Button, Typography, Paper, Box, Container, TextField} from '@material-ui/core'
import {useState} from 'react';
import {BrowserRouter as Router,  useHistory, useLocation} from "react-router-dom";
import {useDispatch} from 'react-redux';
import { io } from "socket.io-client";

// import { getTodo } from '../actions/todo';
import ToDoLists from "./todolists/personal/personaltodolist";
import NavBar from '../HomeComponents/NavBar/NavBar';
import ChatButton from './chat/chat';
import ChatBox from "./chat/chatBox";
import GroupProfile from './GroupProfile/GroupProfile';

import "react-datepicker/dist/react-datepicker.css";
import useWindowDimensions from "../useWindowDimensions";
import PersonalForm from "./todolists/personal/personalToDoForm"
import GroupForm from "./todolists/group/groupToDoForm";
import axios from 'axios';

//import { faCoffee } from '@fortawesome/fontawesome-free-solid';


function RoomPage(props) {
  const { windowHeight, windowWidth } = useWindowDimensions();
  const [currentId, setCurrentId] = useState(null); 
  const [currentGroupId, setCurrentGroupId] = useState(null); 
  let history = useHistory();
  const [createPopUp, setCreatePopUp] = useState(false); //set the default state to false

  const [showChatBox, setShowChatBox] = React.useState(false)
  
  const dispatch = useDispatch();
  let location = useLocation();

  // used to get logged in user id
  const current_user_id = location.state.user_id;
  const current_username = location.state.user_name;
  const body = location.state.user_avatar;
  const current_user_name = location.state.name;
  const roomId = location.state.roomId;

  const [roomInfo, setRoomInfo] = useState([])


  useEffect(async () => {
    await axios.get(`http://localhost:5000/room/${roomId}`).then((res) => {
      setRoomInfo(roomInfo => ({...roomInfo, ...res.data}))
    })
  }, [roomInfo])

  // Socket.io
  // const socket = useRef();
  const socket = useRef(io("ws://localhost:8900"));

  useEffect(() => {
    // socket.current = io("ws://localhost:8900");

    socket.current.on('roomUsers', ( { room, users} ) => {
      setOnlineMembers(users);
      console.log(onlineMembers);
    })
  }, []);

  useEffect(() => {
    socket.current.emit("joinRoom", { userId: current_user_id, roomId: roomId });
  }, [current_user_id, roomId]);

  const [onlineMembers, setOnlineMembers] = useState([]);

  return (
    <>

      <div>
        <NavBar id={current_user_id} username={current_username} avatar={body} name = {current_user_name}/>
      </div>
      <div>
        <GroupProfile id={current_user_id} username={current_username} avatar={body} name = {current_user_name} roomId = {roomId} onlineMembers = {onlineMembers}/>
      </div>
        
      <Container style = {{maxWidth: '100%'}}>
        <div style ={{display: "flex", flexDirection: 'row', height: 30, paddingTop: 20, paddingBottom:20, justifyContent:"center", textAlign: 'center'}}>
          <div>
            <Typography> You are in: {roomInfo.name}</Typography>
            <Typography>{roomInfo.description}</Typography>
          </div>

          <Button style={{position:"absolute", right: 20,alignSelf: "flex-end", backgroundColor: "orange"}} 
            onClick={() => { history.push({
              pathname: "/home",
              state: { id: current_user_id, username: current_username, avatar: body, name: current_user_name}})}}>Back to HomePage</Button>
        </div>
        <div style ={{display: "flex", flexDirection: 'row', height:30, paddingTop: 10, width: "80%", alignSelf: 'flex-start'}}>
          <PersonalForm currentId={currentId} setCurrentId={setCurrentId} type="user" referenceID={current_user_id}/>
          <GroupForm currentGroupId={currentGroupId} setCurrentGroupId={setCurrentGroupId} type="room" referenceID={roomId}/>
          <ChatBox id={current_user_id} roomId={roomId} socketId={socket}/>  
        </div>

      </Container>
    </>
    );
  }
  
  export default RoomPage;