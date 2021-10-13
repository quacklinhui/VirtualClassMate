import React from 'react';
import {Button} from '@material-ui/core';
import {Link} from 'react-router-dom';
import './RoomList.css';

class RoomButtons extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            username: props.username,
            avatar: props.avatar,
            hat: props.hat,
            name: props.name,
            room: props.room,
            roomExists: props.isRoom,
            roomId: props.roomId,
        };
    }
    render () {  

        if (this.state.roomExists == 'true') {
            return (
                <Link style={{textDecoration: 'none', width: '100%'}} to = {{
                    pathname: '/room',
                    state: {user_id: this.state.id, user_name: this.state.username, user_avatar: this.state.avatar, user_hat: this.state.hat, name: this.state.name, roomId: this.state.roomId}
                }}> 
                    <Button variant="contained" style = {{backgroundColor: 'rgb(159, 136, 180)', color: 'white', marginBottom: '10px', height: '45px', fontSize: '15px', width: '100%'}} className="roombutton">{this.state.room}</Button>  
                </Link>
            )
        }
        else {
            return (
                <>
                    <h4 style = {{textAlign: 'center', color: 'lavenderblush'}}>You have not joined any room!</h4>
                </>
            )
        }
        
    }
    
}

export default RoomButtons;