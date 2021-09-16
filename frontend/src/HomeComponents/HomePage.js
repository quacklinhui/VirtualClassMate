import NavBar from './NavBar/NavBar';
import {Button, Typography, Paper, Box, Container} from '@material-ui/core'
import CreateRoomPopUp from './CreateRoomPopUp/CreateRoomPopUp';
import {useState} from 'react';
import {BrowserRouter as Router,  useHistory} from "react-router-dom";
import RoomPage from '../MainRoomComponents/RoomPage';

// To do: the number of buttons should be dynamically formed based on the database
function HomePage() {
  let history = useHistory();
  return (
      <div>
      <main>
      <div>
        <NavBar />
      </div>
        <Container color = "primary.main" maxWidth="lrg">
          <Typography>
              Your Rooms
          </Typography>
          <Button variant="contained" color="primary" onClick={() => { history.push("/room")}}>
              Temp Enter Room
          </Button>
        </Container>
        </main>
      </div>
    );
  }
  
  export default HomePage;