import NavBar from './NavBar/NavBar';
import AvatarBar from './AvatarBar/AvatarBar';
import FriendList from './FriendList/FriendList';
import RoomList from './RoomList/RoomList';
import AddFriend from './AddFriend/AddFriend';

import {BrowserRouter as Router, useLocation} from "react-router-dom";



// To do: the number of buttons should be dynamically formed based on the database
function HomePage() {
  let location = useLocation();

  // used to get logged in user id
  const current_user_id = location.state.id;
  const current_username = location.state.username;
  const body = location.state.avatar;
  const hat = location.state.hat;
  const current_user_name = location.state.name;

  return (
      <div>
        <main>
          <NavBar id={current_user_id} username={current_username} avatar={body} hat={hat} name = {current_user_name}/>
          <AvatarBar id={current_user_id} username={current_username} avatar={body} hat={hat} name = {current_user_name}/>
          <div style = {{display: 'flex', alignItems: 'flex-start', marginLeft: '20px', marginTop: '50px', marginRight: '20px'}}>

            <RoomList id={current_user_id} username={current_username} avatar={body} hat={hat} name = {current_user_name}/>
            <FriendList id={current_user_id}/>
            <AddFriend currentId={current_user_id}/>
          </div>       
        </main>
      </div>
    );
  }
  
  export default HomePage;