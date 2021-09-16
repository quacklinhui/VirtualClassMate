import NavBar from '../HomeComponents/NavBar/NavBar';
import {Button, Typography, Paper, Box, Container} from '@material-ui/core'
import {useState} from 'react';

// To do: the number of buttons should be dynamically formed based on the database
function RoomPage() {
  const [createPopUp, setCreatePopUp] = useState(false); //set the default state to false
    
  return (
      <div>
      <div>
        <NavBar />
      </div>
      <Container style={{alignItems:"center", alignContent:"center",textAlign: "center",}}>
          <Typography> You are in:</Typography>
          <div style ={{display: "flex",flexDirection: 'row',height: 30,paddingTop: 5}}>
          <Container style={{width:"40%", backgroundColor: "#D8ABEC60"}}>Hello</Container>
          <Container style={{width:"40%", backgroundColor: "#D8ABEC60"}}>Hello</Container>
          </div>

      </Container>
      </div>
    );
  }
  
  export default RoomPage;