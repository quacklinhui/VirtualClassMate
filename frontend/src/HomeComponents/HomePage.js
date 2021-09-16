import NavBar from './NavBar/NavBar';
import {Button, Typography, Paper, Box, Container} from '@material-ui/core'

function HomePage() {
    return (
      <>
      <div>
        <NavBar />
      </div>


      <Container color = "primary.main" maxWidth="lrg">
      <Typography>
          Your Rooms
        </Typography>
        <Button variant="contained" color="primary">
          Your Rooms
        </Button>

      </Container>

      </>
    );
  }
  
  export default HomePage;