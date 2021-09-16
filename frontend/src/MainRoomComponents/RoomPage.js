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
      </div>
    );
  }
  
  export default RoomPage;