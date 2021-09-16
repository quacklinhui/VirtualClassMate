import NavBar from './NavBar/NavBar';
import {Button} from '@material-ui/core'

function HomePage() {
    return (
      <>
      <div>
        <NavBar />
      </div>

      <Button variant="contained" color="primary">
        Primary
      </Button>
      </>
    );
  }
  
  export default HomePage;