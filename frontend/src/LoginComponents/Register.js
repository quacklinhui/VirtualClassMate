import { BrowserRouter as Router, Redirect, useHistory } from "react-router-dom";
import React, { useState } from "react";
import HomePage from '../HomeComponents/HomePage';
import Login from '../LoginComponents/Login';
import logo from '../images/logoWithoutWords.png';
import axios from "axios";
import './Register.css';

import { useDispatch } from "react-redux";
import { ResponsiveEmbed } from "react-bootstrap";


function Register() {
  let history = useHistory();

  const dispatch = useDispatch();

  // TODO add name as field
  const [user, setUser] = useState({
    username: "",
    name: "",
    email: "",
    password: "",
  });

    const register = (e) => {
    e.preventDefault();
    // let userdata = JSON.stringify(user)
    console.log(user)
    axios.post("http://localhost:5000/user/", user).then((res) => {
      if (res.data.status == false) {
        console.log(`Existing ${res.data.source}`);
      } else {
        history.push({
          pathname: "/login",
          // state: { id: res.data._id, username: res.data.username , avatar: res.data.avatarID1, hat: res.data.avatarID2, name: res.data.name},
        });
      }
    });
  }



    // put below fetch function into try catch
    // try{
    // }
    // catch{
    // }


  //   let response = await fetch('http://localhost:5000/user', {
  //     method: 'POST',
  //     body: userdata
  //   })
  //   // let content = response.json()

  //   if (response.data.status != 200){
  //     console.log(`There is already an existing account ${response.data.source}`)
  //   }
  //   else{
  //     console.log(e)
  //   }

  // }
  return (
    <div>
      <div className="app">
        <img className='logo' src={logo} alt="logo"></img>
        <h1 className="virtualClassMate">
          Virtual ClassMate
        </h1>
        <h2 className="register">
          Register
        </h2>
        <form id="reg" onSubmit={register}>

          <h2 className="username">
            Username
          </h2>
          <input className="userinput"
            type="text"
            placeholder="Username"
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}></input>
          <h2 className="name">
            Name
          </h2>
          <input className="nameinput"
            type="text"
            placeholder="Name"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}>
          </input>
          <h2 className="email">
            Email
          </h2>
          <input className="emailinput"
            type="text"
            placeholder="Email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}>
          </input>
          <h2 className="pw">
            Password
          </h2>
          <input className="pwinput"
            type="text"
            placeholder="Password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}>
          </input>
          <button className="registerbutton" variant="contained" color="primary" type="submit">
            Register
          </button>
          <button className="linktolog" onClick={() => { history.push("/login") }}>
            Been here before? Click here to Login!
          </button>
        </form>
      </div>
      <body className="body">
      </body>

    </div>
  );
}


export default Register;