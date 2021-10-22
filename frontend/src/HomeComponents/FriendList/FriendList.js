import React, {useState, useEffect} from 'react';
import './FriendList.css';
import axios from 'axios';
import {CircularProgress} from '@material-ui/core';
import Friend from './Friend';


// for integrating backend for friends list: https://www.andreasreiterer.at/react-list-component/
function FriendList(props){

    const [userFriends, setUserFriends] = useState([]);

    useEffect(async () => {
        await axios.get(`http://localhost:5000/user/${props.id}`).then((res) => {
            setUserFriends(userFriends => res.data.friends)
        })
    }, [userFriends])

    const [friendList, setFriendList] = useState([])
    const [loading, setLoading] = useState(false);
    const friends_list = []

    function checkLoaded(){
        if (friendList.length != 0) {
            setLoading(true)
        } else if (friends_list == 0 && friendList.length == 0) {
            setLoading(true)
        }
    }

    useEffect(async () => {
        for (let i=0; i < userFriends.length; i++) {
            await axios.get(`http://localhost:5000/user/${userFriends[i]}`).then((res) => {
                const {_id, name, username, password, email, toDoList, rooms, avatarID1, avatarID2, friends, __v} = res.data;
                friends_list.push({_id, name, username, password, email, toDoList, rooms, avatarID1, avatarID2, friends, __v})
            })
        }
        if (friends_list.length > 0) {
            setFriendList(friendList => friends_list)
        }
        setTimeout(checkLoaded, 2000)
    }, [userFriends, friendList])

    return(
        <>
            <div style = {{display: 'flex', flexDirection: 'column', marginLeft: '200px'}}>
                <div style = {{width: '300px', fontWeight: 'bold'}}>Your Friends</div>
                <div style = {{backgroundColor: 'rgb(203, 184, 221)', borderRadius: '10px', width: '150%', height: '350px', position: 'relative'}}>
                    <div className = "friends">
                        {loading ? (!friendList.length ? <Friend friendExists = 'false'/> : friendList.map((friend) => <Friend friendExists = 'true' key = {friend._id} friendId = {friend._id} friendName = {friend.name}/>)):
                            <CircularProgress style = {{'color': 'lavender', 'marginLeft': '45%', 'marginTop': '5%'}}/>
                        }
                    </div> 
                </div> 
            </div>     
        </>
    )
}

export default FriendList