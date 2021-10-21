import {BrowserRouter as Router,  Redirect,  useHistory, useLocation} from "react-router-dom";
import {useState} from 'react';
import { Link } from 'react-router-dom';
// import AvatarBar from '../HomeComponents/AvatarBar/AvatarBar';
// import Register from '../LoginComponents/Register';
// import {Button, Typography, Paper, Box, Container} from '@material-ui/core'
import './NewCustom.css';
import axios from 'axios'
import animal1hat1 from './Images/sampleAvatars/animal1hat1.png'
import animal1hat2 from './Images/sampleAvatars/animal1hat2.png'
import animal2hat1 from './Images/sampleAvatars/animal2hat1.png'
import animal2hat2 from './Images/sampleAvatars/animal2hat2.png'
import animal3hat1 from './Images/sampleAvatars/animal3hat1.png'
import animal3hat2 from './Images/sampleAvatars/animal3hat2.png'
// import User from "../../../../backend/models/user";



function NewCustom() {

  // used to get logged in user id
  let location = useLocation();
  const id = location.state.id;
  const username = location.state.username;
  // const avatar = location.state.avatar;
  const hat = location.state.hat;
  const name = location.state.name;
  console.log(location)
  
  let avatars = [animal1hat1, animal1hat2, animal2hat1, animal2hat2, animal3hat1, animal3hat2]
  const [avatarNum, setavatarNum] = useState(0);
    
  function onClickForwardAnimal(){
    // make sure you dont exceed number of avatars
    if (avatarNum < avatars.length - 2){
      setavatarNum(avatarNum + 2)
    }
  }

  function onClickBackAnimal(){
    if (avatarNum > 2){
      setavatarNum(avatarNum - 2)
    }
  }

  function onClickForwardHat(){
    if (avatarNum%2 == 0){
      setavatarNum(avatarNum + 1)
    }
  }

  function onClickBackHat(){
    if (avatarNum%2 !== 0){
      setavatarNum(avatarNum - 1)
    }
  }

  // to push user variables back to home
  let history = useHistory();

  function backHome() {
    history.push({
      pathname: '/home',
      state: {id: id, username: username , avatar: avatars[avatarNum].substr(14, 11), hat: hat, name: name}
  });
  }

  const [currentAva, setNewAva] = useState({
    avatarID1: "",
  });

  const changeAva = (e) => {
    e.preventDefault();
    console.log(avatars[avatarNum])
    const newAvatar = avatars[avatarNum].substr(14, 11)
    console.log(newAvatar + "wassup")
    axios.patch(`http://localhost:5000/user/avatar/${id}`,{
      avatarID1: newAvatar,
      avatarID2: "",
    })
  }

  return (
    <div>
      <div className="app">
        <h1 className="Youravatar">
          Your Avatar
        </h1>
        <button className = "backbutton" onClick = {()=>backHome()}>Back</button>
        <button className="nextanimal" onClick={onClickForwardAnimal}>
          Next Avatar
        </button>
        <button className="previousanimal" onClick={onClickBackAnimal}>
          Prev Avatar
        </button>
        <button className="nexthat" onClick={onClickForwardHat}>
          Next Hat
        </button>
        <button className="previoushat" onClick={onClickBackHat}>
          Prev Hat
        </button>
        <img className = "avatardisplay" src={avatars[avatarNum]} alt="" /><br />

        <button className="save" onClick={(e) => setNewAva({ ...currentAva, avatarID1: avatars[avatarNum] }), changeAva}>Save Avatar</button>

      </div>
      <body className="body">
      </body>

    </div>
  );
}

export default NewCustom;