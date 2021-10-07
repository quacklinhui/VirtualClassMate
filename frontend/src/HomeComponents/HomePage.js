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
import AddFriend from './AddFriend/AddFriend';

// To do: the number of buttons should be dynamically formed based on the database
function HomePage() {
  let history = useHistory();

  // used to get currentuserid
  const [currentId, setCurrentId] = useState(null);

  return (
      <div>
      <main>
        <NavBar />
        <AvatarBar />
        <div style = {{display: 'flex', alignItems: 'flex-start', marginLeft: '20px', marginTop: '50px', marginRight: '20px'}}>

          <RoomList/>
          <FriendList />
          <AddFriend />
        </div>
        
        </main>
      </div>
    );
  }
  
  export default HomePage;