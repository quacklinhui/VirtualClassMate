import NavBar from '../HomeComponents/NavBar/NavBar';
import {Button, Typography, Paper, Box, Container} from '@material-ui/core'
import {useState} from 'react';
import {BrowserRouter as Router,  useHistory} from "react-router-dom";

// To do: the number of buttons should be dynamically formed based on the database
function RoomPage() {
let history = useHistory();
  const [createPopUp, setCreatePopUp] = useState(false); //set the default state to false
    
  return (
      <div>
      <div>
        <NavBar />
      </div>
      <Container style={{alignItems:"center", alignContent:"center",textAlign: "center",}}>
        <div style ={{display: "flex",flexDirection: 'row',height: 30,paddingTop: 20, justifyContent:"center"}}>
            <Typography> You are in: "Insert RoomName"</Typography>
            <Button style={{position:"absolute", right: 20,alignSelf: "flex-end", backgroundColor: "orange"}} onClick={() => { history.push("/home")}}>Back to HomePage</Button>
          </div>
          <div style ={{display: "flex",flexDirection: 'row',height: 30,paddingTop: 5, width: "70%"}}>
            <Container style={{width:"45%", backgroundColor: "#D8ABEC60"}}>
                <Button>Personal</Button>
            </Container>
            <Container style={{width:"45%", backgroundColor: "#D8ABEC60"}}><Button>Group</Button></Container>
            <Container style={{width:"25%", backgroundColor: "#D8ABEC60", position: "absolute", right: 20}}>
                <Button>Chat</Button>
            </Container>
          </div>

      </Container>
      </div>
    );
  }
  
  export default RoomPage;