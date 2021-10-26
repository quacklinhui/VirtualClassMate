
import React, { useState } from 'react';
import './NavBar.css';
import Buttons from './Button.js';
import logo from './../../images/VirtualClassMate_FullLogo.png';
import {Button} from '@material-ui/core';
import {BrowserRouter as Router,  useHistory} from "react-router-dom";


function NavBar({id, username, avatar, name, rerender}) {

    let history = useHistory();

    const rerenderRoomList = () => {
      rerender();
    }

    return (
            <nav className="navbar" >
              <Button disableRipple disableFocusRipple style={{padding:0}}  onClick={() => {history.push({
                pathname: "/home",
                state: { id: id, username: username, avatar: avatar, name: name}})}}>
                  <img className="navbar-logo" src={logo} alt = ''></img>
              </Button>    
              <Buttons userId = {id} rerender = {rerenderRoomList}/>
            </nav>          
    )
}

export default NavBar;