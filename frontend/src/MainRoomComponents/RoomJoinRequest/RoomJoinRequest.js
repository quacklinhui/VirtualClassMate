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
            hasAccepted: '#c8f902',
            hasAcceptedText: 'Accept',
            isAdmin: props.isAdmin,
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
        if (this.state.isAdmin == 'false') {
            return (
                <div>
                    <h4 style = {{color: 'black', lineHeight: '50px', verticalAlign: 'middle'}}>Only admins are allowed to accept requests!</h4>
                </div>
            )
        }
        else if (this.state.hasRequest == 'true') {
            return (
                <div className = 'requestDiv'>
                    <div style = {{marginLeft: '4%', marginTop: 0, fontWeight: 'bold', fontSize: '20px'}}>{this.state.newMemberName}</div>
                    <Button className = 'requestText' style = {{right: '5px', fontSize: '11px', fontWeight: 'bold', backgroundColor: this.state.hasAccepted}} onClick = {() => {this.acceptRequest();}}>{this.state.hasAcceptedText}</Button> 
                </div>
            )
        }
        else {
            return (
                <div>
                    <h4 style = {{color: 'black', lineHeight: '50px', verticalAlign: 'middle'}}>There are no more room requests!</h4>
                </div>
            )
        }
    }
}

export default RoomJoinRequest