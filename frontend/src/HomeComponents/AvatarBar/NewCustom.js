import {BrowserRouter as Router,  Redirect,  useHistory} from "react-router-dom";
import {useState} from 'react';
import { Link } from 'react-router-dom';
// import AvatarBar from '../HomeComponents/AvatarBar/AvatarBar';
// import Register from '../LoginComponents/Register';
// import {Button, Typography, Paper, Box, Container} from '@material-ui/core'
import './NewCustom.css';
import animal1hat1 from './Images/sampleAvatars/animal1hat1.png'
import animal1hat2 from './Images/sampleAvatars/animal1hat2.png'
import animal2hat1 from './Images/sampleAvatars/animal2hat1.png'
import animal2hat2 from './Images/sampleAvatars/animal2hat2.png'
import animal3hat1 from './Images/sampleAvatars/animal3hat1.png'
import animal3hat2 from './Images/sampleAvatars/animal3hat2.png'



function NewCustom() {
    let avatars = [animal1hat1, animal1hat2, animal2hat1, animal2hat2, animal3hat1, animal3hat2]
    const [avatarNum, setavatarNum] = useState(0);
    
    function onClickForward(){
        // make sure you dont exceed number of avatars
        if (avatarNum < avatars.length - 1){
            setavatarNum(avatarNum + 1)
        }
    }

    function onClickBack(){
        if (avatarNum !== 0){
            setavatarNum(avatarNum - 1)
        }
    }

  return (
    <div>
      <div className="app">
        <h1 className="Youravatar">
          Your Avatar
        </h1>
        <Link to = "/home">
                <button className = "backbutton">Back</button>
        </Link>  
        <button className="nextanimal" onClick={onClickForward}>
          Next Avatar
        </button>
        <button className="previousanimal" onClick={onClickBack}>
          Prev Avatar
        </button>
        <img className = "avatardisplay" src={avatars[avatarNum]} alt="" /><br />

        <button className="save">Save Avatar</button>

      </div>
      <body className="body">
      </body>

    </div>
  );
}

export default NewCustom;