import React from "react";
import { Button } from '@material-ui/core';
import './JoinRoomPopUp.css';


class FriendRoom extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            roomName: props.roomName,
            haveRoom: props.haveRoom,
            loading: props.loading
        }
    }

    render() {
        if (this.state.haveRoom == 'true') {
            return (
                <div style = {{ display: 'flex', flexDirection: 'row', width: '100%', alignContent: 'center', padding: '5px', marginBottom: '10px'}}>
                    <div style = {{color: 'black', marginLeft: '5%', alignContent: 'center', marginTop: 0, fontWeight: 'bold'}}>{this.state.roomName}</div>
                    <Button className = 'room-text' style = {{marginLeft: '25%', backgroundColor: '#c8f902', fontSize: '11px', fontWeight: 'bold'}}>Request to Join Room</Button>
                </div>
            )
        }
        else {
            return (
                <div style = {{color: 'black', fontSize: '15px', fontWeight: 'bold', marginBottom: '10px'}}>
                    This friend does not have any rooms for you to join!
                </div>
            )
        }
        
    }
}

export default FriendRoom;