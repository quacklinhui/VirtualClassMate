import React from "react";
import { Button } from '@material-ui/core';
import './JoinRoomPopUp.css';
import axios from 'axios';


class FriendRoom extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            roomName: props.roomName,
            haveRoom: props.haveRoom,
            loading: props.loading,
            added: false,
            hasAdded: '#c8f902',
            hasAddedText: 'Request to Join Room',
            hasAddedMargin: '0%',
            roomId: props.roomId,
            userId: props.userId
        }
    }

    async componentWillMount(){
        await axios.get(`http://localhost:5000/room/${this.state.roomId}`).then((res) => {
            for (let i=0; i < res.data.requestList.length; i++) {
                if (this.state.userId == res.data.requestList[i]) {
                    this.setState({hasAdded: '#aaaaaa', hasAddedText: 'Requested!', hasAddedMargin: '45%'})
                }
            }
        })
    }

    async requestToJoinRoom() {
        this.setState({hasAdded: '#aaaaaa', hasAddedText: 'Requested!', hasAddedMargin: '45%'})
        await axios.patch(`http://localhost:5000/room/request/${this.state.roomId}`, {
            userID: this.state.userId
        })
    }

    render() {

        if (this.state.haveRoom == 'true') {
            return (
                <div style = {{ display: 'flex', flexDirection: 'row', width: '90%', justifyContent: 'space-between', padding: '10px', marginBottom: '10px', borderStyle: 'solid', borderColor: 'black', marginLeft: '2.5%', borderWidth: '1px', borderRadius: '10px'}}>
                    <div style = {{color: 'black', marginLeft: '1%', alignContent: 'center', marginTop: 0, fontWeight: 'bold', fontSize: '20px'}}>{this.state.roomName}</div>
                    <Button className = 'room-text' style = {{alignSelf: 'flex-end', backgroundColor: this.state.hasAdded, fontSize: '11px', fontWeight: 'bold'}} onClick = {() => {this.requestToJoinRoom();}}>{this.state.hasAddedText}</Button>
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