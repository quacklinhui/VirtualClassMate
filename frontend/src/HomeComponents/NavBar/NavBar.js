
import React from 'react';
import './NavBar.css';
import Buttons from './Button.js';
import logo from './../../images/VirtualClassMate_FullLogo.png';
import {Button} from '@material-ui/core';
import {BrowserRouter as Router,  useHistory, useLocation} from "react-router-dom";
import HomePage from '../HomePage';



function NavBar({id, username, avatar, hat, name}) {
    let history = useHistory();

    return (
            <nav className="navbar" >
            <Button disableRipple disableFocusRipple style={{padding:0}}  onClick={() => {history.push({
              pathname: "/home",
              state: { id: id, username: username, avatar: avatar, hat: hat, name: name}})}}>
                <img className="navbar-logo" src={logo} alt = ''></img>
            </Button>
            <Button className = 'logoutbutton' variant="contained" style = {{backgroundColor: '#555555', color: '#fff'}}
            onClick={() => {history.push({
              pathname: "/login",
              state: { id: "", username: "", avatar: "", hat: "", name: ""}})}}>
              Logout
            </Button>
            <Buttons userId = {id} />


            </nav>          
    )
}

export default NavBar;