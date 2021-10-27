import React from 'react';
import {Button} from '@material-ui/core';
import './InviteFriendsPopUp.css';
import axios from 'axios';

class Friends extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            friendId: props.friendId,
            roomId: props.roomId, 
            name: props.name,
            isFriend: props.isFriend,
            userId: props.userId,
            rerenderFriendList: props.rerenderList,
            hasAdded: '#c8f902',
            hasAddedText: 'Invite',
        };
    }
    
    async addUserToRoom() {
        this.setState({hasAdded: '#aaaaaa', hasAddedText: 'Invited'})
        await axios.patch(`http://localhost:5000/room/add/${this.state.roomId}`, {
            newMemberID: this.state.friendId,
            adderID: this.state.userId
        })
        
    }

    render () {  
        if (this.state.isFriend === 'true'){
            return (
                <div className = "frienddiv">
                    <h1 style = {{marginLeft: '30px'}}>{this.state.name}</h1>                    
                    <Button className = "addButton" style = {{fontSize: '12px', fontWeight: 'bold', backgroundColor: this.state.hasAdded, height: '65%', right: '5px'}} onClick = {() => this.addUserToRoom()}>{this.state.hasAddedText}</Button>
                </div>
            )
        }
        else {
            return (
                <div>
                    <h4 style = {{color: 'black', lineHeight: '50px', verticalAlign: 'middle'}}>There are no more friends to add!</h4>
                </div>
            )
        }
    }
}

export default Friends;