import {BrowserRouter as Router,  Redirect,  useHistory} from "react-router-dom";
import React, {useState} from 'react';
import HomePage from '../HomeComponents/HomePage';
import Register from '../LoginComponents/Register';
// import {Button, Typography, Paper, Box, Container} from '@material-ui/core'
import './Login.css';

function Login() {

    let history = useHistory();
    const checkUser = (e) => {
      e.preventDefault();
      if (user.email == email && user.password == password){
        user.login = true;
        // get user id
      }
      else {
        console.log("wrong email/password")
      }

      if (user.login == true){
        history.push({
          pathname: "/home",
          state: {id: user.id}
        })
      }
    }

    //todo: currently hardcoded need to retrieve from database
    const email = 'hello@gmail.com';
    const password = '123';

    const [user, setUser] = useState({
      email: '',
      password: '',
      id: 1,
      login: false
    });

  
    return (
        <div>
        <div className="app">
            <h1 className="virtualClassMate">
              Virtual ClassMate
            </h1>
            <h2 className="login">
              Login
            </h2>
            <form id = "login" onSubmit = {checkUser}> 
              <h2 className="email">
                Email
              </h2>
              <input className="emailinput" type='text' placeholder="Email" value = {user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value})}></input>
              <h2 className="pw">
                Passwords
              </h2>
              <input className="pwinput" type='text' placeholder = "Password" 
              onChange={(e) => setUser({ ...user, password: e.target.value})} ></input>
              <h5 className = "loginblock"> 
                <button  className = "loginbutton" type="submit">
                  Login
                </button>
              </h5>
            </form>

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
