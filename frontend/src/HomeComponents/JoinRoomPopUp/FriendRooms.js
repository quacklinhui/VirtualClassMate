import React from 'react';
import { Button } from 'react-bootstrap';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import axios from 'axios';
import FriendRoom from './FriendRoom';
import { CircularProgress, LinearProgress } from '@material-ui/core';

class FriendRooms extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            userId: props.userId,
            friendId: props.friendId,
            friendName: props.friendName,
            friendRooms: props.friendRooms,
            haveFriend: props.haveFriend,
            showFriendRooms: false,
            friendRoomsNames: [],
            userRooms: [],
            loading: false
        };
    }

    // to get current user's rooms
    async getUserRooms() {
        await axios.get(`http://localhost:5000/user/${this.state.userId}`).then((res) => {
            this.state.userRooms = this.state.userRooms.concat(res.data.rooms)})
    }

    // to get friends rooms, filtering out rooms that user is already in
    async getFriendRooms() {
        await this.getUserRooms();
        for (let i=0; i < this.state.friendRooms.length; i++){
            for (let j=0; j < this.state.userRooms.length; j++) {
                if (this.state.userRooms[j] === this.state.friendRooms[i]) {
                    this.state.friendRooms.splice(i, 1)
                }
            }
        }
        
        for (let x=0; x < this.state.friendRooms.length; x++) {
            await axios.get(`http://localhost:5000/room/${this.state.friendRooms[x]}`).then((res) => {
                this.state.friendRoomsNames = this.state.friendRoomsNames.concat(res.data)
            })
        }

        // filtering - to remove duplicates
        this.state.friendRoomsNames = new Set(this.state.friendRoomsNames.map(item => JSON.stringify(item)));
        this.state.friendRoomsNames = [...this.state.friendRoomsNames].map(item => JSON.parse(item));
        console.log(this.state.friendRoomsNames)
        this.setState({loading: true});
    }

    render () {  
        if (this.state.haveFriend == 'true'){
            return (
                <>
                    <Button className = 'joinRoomPopUp-button' onClick = {() => {(this.state.showFriendRooms ? (this.setState({showFriendRooms: false})) : (this.setState({showFriendRooms: true}))); this.getFriendRooms();}}>
                        { this.state.friendName }
                        { this.state.showFriendRooms ? <ArrowDropDown className = 'joinRoomPopUp-arrow' style={{ color:"black", height:"40px", width:"10%",position:"absolute", right:20, marginTop: '0px'}}/> : <ArrowDropDown className = 'joinRoomPopUp-arrow' style={{ color:"white", height:"40px", width:"10%",position:"absolute", right:20, marginTop: '0px'}}/> }
                    </Button>
                    {this.state.showFriendRooms ? (this.state.loading ? (this.state.friendRoomsNames.length ? (this.state.friendRoomsNames.map((room) => <FriendRoom key = {room._id} roomName = {room.name} roomId = {room._id} userId = {this.state.userId} loading = {this.state.loading} haveRoom = 'true'/>)): <FriendRoom haveRoom = 'false'/>): <CircularProgress size = {40} style = {{'color': 'lavender', 'marginLeft': '45%', 'padding': '10px'}}/>): null}     
                </>
            )
        }
        else {
            return (
                <div>
                    <h4 style = {{color: 'black', lineHeight: '50px', verticalAlign: 'middle'}}>Get some friends!</h4>
                </div>
            )
        }
        
    }
}

export default FriendRooms;