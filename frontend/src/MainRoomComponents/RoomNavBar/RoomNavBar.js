
import React from 'react';
import './RoomNavBar.css';
import logo from '../../images/VirtualClassMate_FullLogo.png';
import {Button} from '@material-ui/core';
import {BrowserRouter as Router,  useHistory} from "react-router-dom";

function RoomNavBar({id, username, avatar, name}) {

    let history = useHistory();

    return (
        <nav className="roomnavbar" >
            <Button disableRipple disableFocusRipple style={{padding:0}}  onClick={() => {history.push({
                pathname: "/home",                
                state: { id: id, username: username, avatar: avatar, name: name}})}}>
                <img className="roomnavbar-logo" src={logo} alt = ''></img>
            </Button>
            <Button style = {{right: '2%', backgroundColor: '#555555', color: 'white'}} onClick={() => {history.push({
                    pathname: "/login",
                    state: { id: "", username: "", avatar: "", name: ""}})}}>Logout</Button>    
        </nav>          
    )
}
export default RoomNavBar;