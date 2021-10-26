import NavBar from './NavBar/NavBar';
import AvatarBar from './AvatarBar/AvatarBar';
import FriendList from './FriendList/FriendList';
import RoomList from './RoomList/RoomList';
import AddFriend from './AddFriend/AddFriend';
import FriendRequestPopUp from './AddFriend/FriendRequestPopUp';
import './AddFriend/FriendRequestPopUp.css';

import React, { useState } from 'react';
import {BrowserRouter as Router, useLocation} from "react-router-dom";
import {Button,Paper} from '@material-ui/core';




// To do: the number of buttons should be dynamically formed based on the database
function HomePage() {
  let location = useLocation();

  // used to get logged in user id
  const current_user_id = location.state.id;
  const current_username = location.state.username;
  const body = location.state.avatar;
  const current_user_name = location.state.name;

  const [createFriendRequestPopUp, setFriendRequestPopUp] = useState(false);
  const [rerender, setRerender] = useState(true)
  const [rerenderFriend, setRerenderFriend] = useState(true)


    // function to open Friend Request Pop Up
    const toggleFriendRequestPopUp = () => {
        setFriendRequestPopUp(!createFriendRequestPopUp)
    }

    // to rerender room list
    const rerenderRoomList = () => {
      setRerender(true)
    }

    // stop rerendering rooms after rendered
    const stopRerender = () => {
      setRerender(false)
    }

    // to rerender friend list
    const rerenderFriendList = () => {
      setRerenderFriend(true)
    }

    // stop rerendering friends after rendered
    const stopRerenderFriend = () => {
      setRerenderFriend(false)
    }

  return (
      <div>
        <main>
          <NavBar id={current_user_id} username={current_username} avatar={body} name = {current_user_name} rerender = {rerenderRoomList}/>
          <AvatarBar id={current_user_id} username={current_username} avatar={body} name = {current_user_name}/>
          <div style = {{display: 'flex', alignItems: 'flex-start', marginLeft: '5%', marginTop: '3%', maxWidth: '90%'}}>
            <RoomList id={current_user_id} username={current_username} avatar={body} name = {current_user_name} rerender = {rerender} stopRerender = {stopRerender}/>
            <FriendList id={current_user_id} rerender = {rerenderFriend} stopRerender = {stopRerenderFriend}/>
            <div style = {{marginLeft: '9%', maxWidth: '100%', marginTop: '6%'}}>
              <AddFriend currentId={current_user_id}/>
              <Button variant = "contained" style = {{marginLeft: '20%' , marginTop: '3%', backgroundColor: 'lightblue'}} onClick = {toggleFriendRequestPopUp}>Friend Requests</Button>
                    {createFriendRequestPopUp && <FriendRequestPopUp userId = {current_user_id} handleClose = {toggleFriendRequestPopUp} rerender = {rerenderFriendList}/>}
            </div>
          </div>       
        </main>
      </div>
    );
  }
  
  export default HomePage;