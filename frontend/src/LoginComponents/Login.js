import {BrowserRouter as Router,  Redirect,  useHistory} from "react-router-dom";
import {useState} from 'react';
import HomePage from '../HomeComponents/HomePage';
import Register from '../LoginComponents/Register';
// import {Button, Typography, Paper, Box, Container} from '@material-ui/core'
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
          <h5 className = "loginblock"> 
            <button  className = "loginbutton" onClick={() => { history.push("/home")}}>
              Login
          </button>
          </h5>
          <h6 >
              <button className="linktoreg" onClick={() => { history.push("/register")}}>
                  New to VirtualClassMate? Click here to Register!
              </button>
            {/* New to VirtualClassMate? <a href = {history.push("/register")}> Click here</a> to Register */}
          </h6>

        </div>
        <body className="body">
        </body>

        </div>
      );
    }
    
    export default Login;
