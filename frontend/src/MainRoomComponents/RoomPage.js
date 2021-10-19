import React, { useEffect } from "react";
import {IconButton,Button, Typography, Paper, Box, Container, TextField} from '@material-ui/core'
import {useState} from 'react';
import {BrowserRouter as Router,  useHistory, useLocation} from "react-router-dom";
import {useDispatch} from 'react-redux';

// import { getTodo } from '../actions/todo';
import ToDoLists from "./todolists/personal/personaltodolist";
import NavBar from '../HomeComponents/NavBar/NavBar';
import ChatButton from './chat/chat';
import ChatBox from "./chat/chatBox";
import GroupProfile from './GroupProfile/GroupProfile';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
//import { AiFillCaretDown, AiOutlinePlus,AiFillCaretUp } from 'react-icons/ai';
import useWindowDimensions from "../useWindowDimensions";
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import PersonalForm from "./todolists/personal/personalToDoForm"
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import GroupForm from "./todolists/group/groupToDoForm";

//import { faCoffee } from '@fortawesome/fontawesome-free-solid';

function RoomPage(props) {
  const { windowHeight, windowWidth } = useWindowDimensions();
  const [currentId, setCurrentId] = useState(null); 
  let history = useHistory();
  const [createPopUp, setCreatePopUp] = useState(false); //set the default state to false

  const [showChatBox, setShowChatBox] = React.useState(false)
  
  const dispatch = useDispatch();
  let location = useLocation();

  // used to get logged in user id
  const current_user_id = location.state.user_id;
  const current_username = location.state.user_name;
  const body = location.state.user_avatar;
  const hat = location.state.user_hat;
  const current_user_name = location.state.name;
  const roomId = location.state.roomId;

  

  // todo: need to add the avatar bar - to show members of the group
  return (
    <div>
      <div>
        <NavBar id={current_user_id} username={current_username} avatar={body} hat={hat} name = {current_user_name}/>
      </div>
      <div>
        <GroupProfile id={current_user_id} username={current_username} avatar={body} hat={hat} name = {current_user_name} roomId = {roomId}/>
      </div>
        
      <Container style={{alignItems:"center", alignContent:"center",textAlign: "center"}}>
        <div style ={{display: "flex",flexDirection: 'row',height: 30,paddingTop: 20, paddingBottom:20,justifyContent:"center"}}>
          <div>
            <Typography> You are in: "Insert RoomName"</Typography>
            <Typography> "Insert Description"</Typography>
          </div>

          <Button style={{position:"absolute", right: 20,alignSelf: "flex-end", backgroundColor: "orange"}} 
            onClick={() => { history.push({
              pathname: "/home",
              state: { id: current_user_id, username: current_username, avatar: body, hat: hat, name: current_user_name}})}}>Back to HomePage</Button>
        </div>
        <div style ={{padding:20,display: "flex",flexDirection: 'row',height: 30,paddingTop: 5, width: "100%"}}>
          <PersonalForm currentId={currentId} setCurrentId={setCurrentId} type="user" referenceID={current_user_id}/>
          <GroupForm currentId={currentId} setCurrentId={setCurrentId} type="room" referenceID={roomId}/>
              
          <IconButton style={{width:"3vw", height: "3vw", borderRadius: 100, backgroundColor: "#D8ABEC60", position: "absolute", right: "2vw", bottom: "2vw", textAlign:"center"}} onClick={()=>{showChatBox?setShowChatBox(false):setShowChatBox(true)}}>
                <ChatBubbleOutlineIcon/>
          </IconButton>
          {showChatBox?<ChatBox id={current_user_id} roomId={roomId}/>:null}
          
        </div>

        </Container>
      </div>
      );
  }
  
  export default RoomPage;