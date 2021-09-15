import React from 'react';
import './NavBar.css';
import Button from './Button.js';
import logo from './../../images/VirtualClassMate_FullLogo.png';

function NavBar() {
    return (
            <nav className="navbar">
                <img className="navbar-logo" src={logo} alt = ''></img>
                <Button />
            </nav>          
    )
}

export default NavBar;