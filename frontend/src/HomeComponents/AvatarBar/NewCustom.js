import {BrowserRouter as Router,  Redirect,  useHistory} from "react-router-dom";
import {useState} from 'react';
// import AvatarBar from '../HomeComponents/AvatarBar/AvatarBar';
// import Register from '../LoginComponents/Register';
// import {Button, Typography, Paper, Box, Container} from '@material-ui/core'
import './NewCustom.css';

function NewCustom() {

    return (
        <div>
        <div className="app">
          <h1 className="Youravatar">
            Your Avatar
          </h1>

        <button className = "nextanimal">
            Next Animal
        </button>
        <button className = "previousanimal">
            Prev Animal
        </button>
        <button className = "previoushat">
            Prev Hat
        </button>
        <button className = "nexthat">
            Next Hat
        </button>

        <button className = "save">
            Save Avatar
        </button>

        </div>
        <body className="body">
        </body>

        </div>
      );
    }


export default NewCustom;