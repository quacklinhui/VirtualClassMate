
import React from 'react';
import './NavBar.css';
import Buttons from './Button.js';
import logo from './../../images/VirtualClassMate_FullLogo.png';
import {Button} from '@material-ui/core';
import {BrowserRouter as Router,  useHistory, useLocation} from "react-router-dom";



function NavBar() {
    let history = useHistory();
    let location = useLocation();
      // used to get logged in user id
    const current_user_id = location.state.user_id;
    const current_username = location.state.user_name;
    const body = location.state.user_avatar;
    const hat = location.state.user_hat;
    const current_user_name = location.state.name;

    return (
            <nav className="navbar">
            <Button disableRipple disableFocusRipple style={{padding:0}}  onClick={() => { history.push({
              pathname: "/home",
              state: { id: current_user_id, username: current_username, avatar: body, hat: hat, name: current_user_name}})}}>
                <img className="navbar-logo" src={logo} alt = ''></img>
            </Button>
            <Buttons/>
            </nav>          
    )
}

export default NavBar;