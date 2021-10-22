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


    // function to open Friend Request Pop Up
    const toggleFriendRequestPopUp = () => {
        setFriendRequestPopUp(!createFriendRequestPopUp)
    }

  return (
      <div>
        <main>
          <NavBar id={current_user_id} username={current_username} avatar={body} name = {current_user_name}/>
          <AvatarBar id={current_user_id} username={current_username} avatar={body} name = {current_user_name}/>
          <div style = {{display: 'flex', alignItems: 'flex-start', marginLeft: '20px', marginTop: '50px', marginRight: '20px'}}>
            <RoomList id={current_user_id} username={current_username} avatar={body} name = {current_user_name}/>
            <FriendList id={current_user_id}/>
            <div>
              <AddFriend currentId={current_user_id}/>
              <Button variant = "contained" style = {{marginLeft: '52%' , marginTop: '2%', backgroundColor: 'lightblue'}} onClick = {toggleFriendRequestPopUp}>Friend Requests</Button>
                    {createFriendRequestPopUp && <FriendRequestPopUp userId = {current_user_id} handleClose = {toggleFriendRequestPopUp}/>}
            </div>
          </div>       
        </main>
      </div>
    );
  }
  
  export default HomePage;