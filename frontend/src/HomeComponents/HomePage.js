import NavBar from './NavBar/NavBar';
import AvatarBar from './AvatarBar/AvatarBar';
import FriendList from './FriendList/FriendList';

import {Button, Typography, Paper, Box, Container, TextField} from '@material-ui/core'
import CreateRoomPopUp from './CreateRoomPopUp/CreateRoomPopUp';
import {useState} from 'react';
import {BrowserRouter as Router,  useHistory} from "react-router-dom";
import RoomPage from '../MainRoomComponents/RoomPage';
import RoomButton from './RoomSelection/RoomButton';
import RoomList from './RoomList/RoomList';

// To do: the number of buttons should be dynamically formed based on the database
function HomePage() {
  let history = useHistory();
  return (
      <div>
      <main>
        <NavBar />
        <AvatarBar />
        <div style = {{display: 'flex', alignItems: 'flex-start', marginLeft: '20px', marginTop: '50px', marginRight: '20px'}}>

          <RoomList/>
          <FriendList />
          <Container style = {{marginLeft: '100px', marginTop: '5%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Typography>Don't see your friends on the list?</Typography>
            <Typography> Add them here:</Typography>
            <TextField id="addFriend" label="Username" variant="outlined" size = "small" style={{ width: '60%', backgroundColor: '#EBECF0', marginBottom: '10px', radiusBorder: '10px'}}/>
            <Button variant = "contained" style = {{backgroundColor: '#FFD580'}}>Add Friend</Button>
          </Container>
        </div>
        
        </main>
      </div>
    );
  }
  
  export default HomePage;