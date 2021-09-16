import NavBar from './NavBar/NavBar';
import {Button, Typography, Paper, Box, Container} from '@material-ui/core'
import CreateRoomPopUp from './CreateRoomPopUp/CreateRoomPopUp';
// To do: the number of buttons should be dynamically formed based on the database
function HomePage() {
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
        <Button variant="contained" color="primary" onClick={() => { alert('clicked') }}>
            Your Rooms
        </Button>
      </Container>
      </main>
      <CreateRoomPopUp trigger = {true}>
          <h3>My Pop up</h3>
      </CreateRoomPopUp>
      </div>
    );
  }
  
  export default HomePage;