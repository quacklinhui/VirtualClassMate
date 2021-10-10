import { 
  BrowserRouter as Router,
  Redirect,
  useHistory,
} from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
//import { login } from "../actions/login";
import HomePage from "../HomeComponents/HomePage";
import Register from "../LoginComponents/Register";
import logo from "../images/logoWithoutWords.png";
// import {Button, Typography, Paper, Box, Container} from '@material-ui/core'
import "./Login.css";

function Login() {
  const dispatch = useDispatch();

  let history = useHistory();
  const checkUser = (e) => {
    e.preventDefault();

    axios.post("http://localhost:5000/user/login", user).then((res) => {
      if (res.data.status == false) {
        console.log(`Login failed. Wrong ${res.data.source}`);
      } else {
        history.push({
          pathname: "/home",
          state: { id: res.data._id, username: res.data.username , avatar: res.data.avatarID1, hat: res.data.avatarID2, name: res.data.name},
        });
      }
    });
  };

  // email: student@gmail.com
  // password: 1234567
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  return (
    <div>
      <div className="app">
        <img className="logo" src={logo} alt="logo"></img>
        <h1 className="virtualClassMate">Virtual ClassMate</h1>
        <h2 className="login">Login</h2>
        <form id="login" onSubmit={checkUser}>
          <h2 className="email">Email</h2>
          <input
            className="emailinput"
            type="text"
            placeholder="Email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          ></input>
          <h2 className="pw">Passwords</h2>
          <input
            className="pwinput"
            type="text"
            placeholder="Password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          ></input>
          <h5 className="loginblock">
            <button className="loginbutton" type="submit">
              Login
            </button>
          </h5>
        </form>

        <h6>
          <button
            className="linktoreg"
            onClick={() => {
              history.push("/register");
            }}
          >
            New to VirtualClassMate? Click here to Register!
          </button>
          {/* New to VirtualClassMate? <a href = {history.push("/register")}> Click here</a> to Register */}
        </h6>
      </div>
      <body className="body"></body>
    </div>
  );
}

export default Login;
