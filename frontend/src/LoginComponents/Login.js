import {
  BrowserRouter as Router,
  Redirect,
  useHistory,
} from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "../actions/login";
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
    // Hardcoded login method
    // if (user.email == email && user.password == password) {
    //   user.login = true;
    //   console.log("login successfull");
    //   // get user id
    // } else {
    //   console.log("wrong email/password");
    // }

    // Real login
    // use this account:
    // email: user1@gmail.com
    // password: 123
    axios.post("http://localhost:5000/user/login", user).then((res) => {
      if (res.data.status == false) {
        console.log(`Login failed. Wrong ${res.data.source}`);
      } else {
        console.log(res.data);
        //setUser({ login: true });
        history.push({
          pathname: "/home",
          state: { id: res.data._id },
        });
      }
    });
    console.log(user);

    if (user.login == true) {
      console.log(user);
      history.push({
        pathname: "/home",
        state: { id: user.id },
      });
    }
  };

  //todo: currently hardcoded need to retrieve from database
  const email = "hello@gmail.com";
  const password = "123";

  const [user, setUser] = useState({
    email: "",
    password: "",
    id: "",
    login: false,
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
