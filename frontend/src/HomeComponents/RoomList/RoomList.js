import React, {Component} from 'react';
import {Button, Typography, Paper, Box, Container, TextField} from '@material-ui/core'
import RoomButton from '../RoomSelection/RoomButton';
import {BrowserRouter as Router,  useHistory} from "react-router-dom";
// for integrating backend for friends list: https://www.andreasreiterer.at/react-list-component/
function RoomList(props){
    let history = useHistory(); 
    return(
        <Container color = "primary.main" maxWidth="lrg">
        <Typography style={{fontWeight:"bold"}}>
            Your Rooms
        </Typography>
        <RoomButton/>
        <Button variant="contained" color="primary" onClick={() => { history.push("/room")}}>
          Temp Enter Room
        </Button>
      </Container>
    )
}

export default RoomList