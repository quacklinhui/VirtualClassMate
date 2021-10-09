import React, {Component} from 'react';
import {Button, Typography, Paper, Box, Container, TextField} from '@material-ui/core'
import RoomButton from '../RoomSelection/RoomButton';
import {BrowserRouter as Router,  useHistory} from "react-router-dom";
// for integrating backend for friends list: https://www.andreasreiterer.at/react-list-component/

function RoomList({id, username, avatar, hat}){
    let history = useHistory(); 
    console.log("room_username: " + username);

    return(
      <>
        <div style = {{display: 'flex', flexDirection: 'column', marginLeft: '50px'}}>
          <div style = {{width: '300px', fontWeight: 'bold'}}>Your Friends</div>
            <div style = {{backgroundColor: 'rgb(203, 184, 221)', borderRadius: '10px', width: '150%', height: '350px', position: 'relative'}}>
              <div className = "rooms">
                  <Button variant="contained" style = {{backgroundColor: 'rgb(159, 136, 180)', color: 'white'}} className="roombutton" 
                    onClick={() => { history.push({
                      pathname: "/room",
                      state: {user_id: id, user_name: username, user_avatar: avatar, user_hat: hat}})}}>
                    Temp Enter Room
                  </Button>
              </div>
            </div> 
        </div>
       </>
        
          


    )
}

export default RoomList