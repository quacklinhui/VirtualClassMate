import React from 'react';
import {IconButton} from '@material-ui/core';
import './InviteFriendsPopUp.css';
import AddCircle from '@material-ui/icons/AddCircle';
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
        };
    }
    
    async addUserToRoom() {
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
                    <IconButton className = 'addButton' onClick = {() => this.addUserToRoom()}>
                        <AddCircle className = "addIcon"/>
                    </IconButton>
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