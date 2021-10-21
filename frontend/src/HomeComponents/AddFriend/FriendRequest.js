import React from 'react';
import {Button} from '@material-ui/core';
import './FriendRequestPopUp.css';
import axios from 'axios';

class FriendRequest extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            haveRequest: props.haveRequest,
            userId: props.userId,
            requestId: props.requestId,
            requestName: props.requestName,
            haveAcceptedMargin: '2%',
            haveAccepted: '#c8f902',
            haveAcceptedText: 'Accept',
        }
    }

    async acceptFriendRequest() {
        this.setState({haveAccepted: '#aaaaaa', haveAcceptedText: 'Accepted!', haveAcceptedMargin: '2%'})
        await axios.patch(`http://localhost:5000/user/addFriend/${this.state.userId}`, {
            newFriendId: this.state.requestId
        })
    }

    render() {
        if (this.state.haveRequest == 'true') {
            return (
                <div className = 'friendRequestDiv'> 
                    <div style = {{marginLeft: '4%', marginTop: 0, fontWeight: 'bold', fontSize: '20px'}}>{this.state.requestName}</div>
                    <Button className = 'friendRequestText' style = {{marginRight: this.state.haveAcceptedMargin, fontSize: '11px', fontWeight: 'bold', backgroundColor: this.state.haveAccepted}} onClick = {() => {this.acceptFriendRequest();}}>{this.state.haveAcceptedText}</Button>
                </div>
            )
        }
        else {
            return (
                <div style = {{color: 'black', fontSize: '15px', fontWeight: 'bold', marginBottom: '10px'}}>
                    There are no friend requests!
                </div>
            )
        }
    }


}

export default FriendRequest