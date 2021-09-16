import {BrowserRouter as Router,  Redirect,  useHistory} from "react-router-dom";
import {useState} from 'react';
import HomePage from '../HomeComponents/HomePage';
import {Button, Typography, Paper, Box, Container} from '@material-ui/core'

function Login() {

    let history = useHistory();
    return (
        <div>
            <Button variant="contained" color="primary" onClick={() => { history.push("/home")}}>
              Temp Login
          </Button>
        </div>
      );
    }
    
    export default Login;
