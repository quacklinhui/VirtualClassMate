import React from 'react';
import {Button} from '@material-ui/core';
import './RoomJoinRequest.css';
import axios from 'axios';

class RoomJoinRequest extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hasRequest: props.hasRequest,
            userId: props.userId,
            newMemberId: props.newMemberId,
            newMemberName: props.newMemberName,
            roomId: props.roomId,
            hasAcceptedMargin: '60%',
            hasAccepted: '#c8f902',
            hasAcceptedText: 'Accept',
        }
    }

    async acceptRequest() {
        this.setState({hasAccepted: '#aaaaaa', hasAcceptedText: 'Accepted!', hasAcceptedMargin: '58%'})
        await axios.patch(`http://localhost:5000/room/accept-request/${this.state.roomId}`, {
            requesterID: this.state.newMemberId,
            accepterID: this.state.userId
        })
    }

    render() {
        if (this.state.hasRequest == 'true') {
            return (
                <div className = 'requestDiv'>
                    <div style = {{marginLeft: '4%', marginTop: 0, fontWeight: 'bold', fontSize: '20px'}}>{this.state.newMemberName}</div>
                    <Button className = 'requestText' style = {{marginLeft: this.state.hasAcceptedMargin, fontSize: '11px', fontWeight: 'bold', backgroundColor: this.state.hasAccepted}} onClick = {() => {this.acceptRequest();}}>{this.state.hasAcceptedText}</Button> 
                </div>
            )
        }
        else {
            return (
                <div style = {{color: 'black', fontSize: '15px', fontWeight: 'bold', marginBottom: '10px'}}>
                    There are no room requests!
                </div>
            )
        }
    }
}

export default RoomJoinRequest