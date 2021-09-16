import React from 'react';
import './NavBar.css';
import Buttons from './Button.js';
import logo from './../../images/VirtualClassMate_FullLogo.png';

function NavBar() {
    return (
            <nav className="navbar">
                <img className="navbar-logo" src={logo} alt = ''></img>
                <Buttons />
            </nav>          
    )
}

export default NavBar;