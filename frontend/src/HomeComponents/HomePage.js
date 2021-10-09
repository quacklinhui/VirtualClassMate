import NavBar from './NavBar/NavBar';
import AvatarBar from './AvatarBar/AvatarBar';
import FriendList from './FriendList/FriendList';
import RoomPage from '../MainRoomComponents/RoomPage';
import RoomButton from './RoomSelection/RoomButton';
import RoomList from './RoomList/RoomList';
import AddFriend from './AddFriend/AddFriend';
import CreateRoomPopUp from './CreateRoomPopUp/CreateRoomPopUp';

import {Button, Typography, Paper, Box, Container, TextField} from '@material-ui/core'
import {useState} from 'react';
import {BrowserRouter as Router,  useHistory, useLocation} from "react-router-dom";



// To do: the number of buttons should be dynamically formed based on the database
function HomePage() {
  let history = useHistory();
  let location = useLocation();

  // used to get logged in user id
  const current_user_id = location.state.id;
  const current_username = location.state.username;
  const body = location.state.avatar;
  const hat = location.state.hat;

  console.log(current_username)

  return (
      <div>
        <main>
          <NavBar />
          <AvatarBar id={current_user_id} username={current_username} avatar={body} hat={hat}/>
          <div style = {{display: 'flex', alignItems: 'flex-start', marginLeft: '20px', marginTop: '50px', marginRight: '20px'}}>

            <RoomList id={current_user_id} username={current_username} avatar={body} hat={hat}/>
            <FriendList id={current_user_id}/>
            <AddFriend currentId={current_user_id}/>
          </div>       
        </main>
      </div>
    );
  }
  
  export default HomePage;