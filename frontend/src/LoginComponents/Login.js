import {BrowserRouter as Router,  Redirect,  useHistory} from "react-router-dom";
import {useState} from 'react';
import HomePage from '../HomeComponents/HomePage';
import {Button, Typography, Paper, Box, Container} from '@material-ui/core'
import './Login.css';

function Login() {

    let history = useHistory();
    return (
        <div>
        <div className="app">
          <h1 className="virtualClassMate">
            Virtual ClassMate
          </h1>
          <h2 className="login">
            Login
          </h2>
          <h2 className="email">
            Email
          </h2>
          <input className="emailinput"></input>
          <h2 className="pw">
            Password
          </h2>
          <input className="pwinput"></input>
            <Button variant="contained" color="primary" onClick={() => { history.push("/home")}}>
              Login
          </Button>
          <h6 className="linktoreg">
            New to VirtualClassMate? <a>Click here</a> to Register
          </h6>

        </div>
        <body className="body">
        </body>

        </div>
      );
    }
    
    export default Login;
