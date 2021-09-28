import {BrowserRouter as Router,  Redirect,  useHistory} from "react-router-dom";
import {useState} from 'react';
import HomePage from '../HomeComponents/HomePage';
import Login from '../LoginComponents/Login';
// import {Button, Typography, Paper, Box, Container} from '@material-ui/core'
import './Register.css';

function Register() {

    let history = useHistory();
    return (
        <div>
        <div className="app">
          <h1 className="virtualClassMate">
            Virtual ClassMate
          </h1>
          <h2 className="register">
            Register
          </h2>
          <h2 className="username">
            Username
          </h2>
          <input className="userinput"></input>
          <h2 className="email">
            Email
          </h2>
          <input className="emailinput"></input>
          <h2 className="pw">
            Password
          </h2>
          <input className="pwinput"></input>
            <button className ="registerbutton" variant="contained" color="primary">
              Register
          </button>
          <button className="linktolog" onClick={() => { history.push("/login")}}>
                  Been here before? Click here to Login!
              </button>

        </div>
        <body className="body">
        </body>

        </div>
      );
    }
    
    export default Register;