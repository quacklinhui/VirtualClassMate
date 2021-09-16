import NavBar from './NavBar/NavBar';
import {Button, Typography, Paper, Box, Container} from '@material-ui/core'
import CreateRoomPopUp from './CreateRoomPopUp/CreateRoomPopUp';
import {useState} from 'react';
// To do: the number of buttons should be dynamically formed based on the database
function HomePage() {
  const [createPopUp, setCreatePopUp] = useState(false); //set the default state to false
    
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
          <Button variant="contained" color="primary" onClick={() => { setCreatePopUp(true) }}>
              Temp Create Room
          </Button>
        </Container>
        </main>
      <CreateRoomPopUp trigger = {createPopUp} setTrigger = {setCreatePopUp}/>
      </div>
    );
  }
  
  export default HomePage;