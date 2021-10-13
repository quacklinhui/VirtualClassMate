import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router,  useHistory} from "react-router-dom";
import axios from 'axios'
import RoomButtons from './RoomButton';

function RoomList({id, username, avatar, hat, name}){
  let history = useHistory(); 
  
  const [user, setUser] = useState({
    "_id": '',
    "name": '',
    "username": '',
    "password": '',
    "email": '',
    "toDoList": [],
    "rooms": [],
    "avatarID1": '',
    "avatarID2": '',
    "friends": [],
    "__v": 0
  });
  
  useEffect( async () => {
    await axios.get(`http://localhost:5000/user/${id}`).then((res) => {
      setUser(user => ({...user, ...res.data}))
    })
  }, [user])

  const [roomList, setRoomList] = useState([]);

  const roomId = user.rooms;
  var rooms_list = []

  useEffect( async () => {

    for (let i = 0; i < roomId.length; i++) {
      await axios.get(`http://localhost:5000/room/${roomId[i]}`).then((res) => {
        const {_id, name, description, admin, members, toDoList, chat, requestList, __v} = res.data;
        rooms_list.push({_id, name, description, admin, members, toDoList, chat, requestList, __v})
      })
    }
    setRoomList(rooms_list)
  },[roomList])
  
  return(
    <>
      <div style = {{display: 'flex', flexDirection: 'column', marginLeft: '50px'}}>
        <div style = {{width: '300px', fontWeight: 'bold'}}>Your Rooms</div>
          <div style = {{backgroundColor: 'rgb(203, 184, 221)', borderRadius: '10px', width: '150%', height: '350px', position: 'relative'}}>
            <div className = "rooms">
              {!roomList.length && setTimeout(1000)? <RoomButtons isRoom = 'false'/> : roomList.map((room) => <RoomButtons key={room._id} id = {id} username = {username} avatar = {avatar} hat = {hat} name = {name} room = {room.name} roomId = {room._id} isRoom = 'true'/>)}
            </div>
        </div> 
      </div>
    </>
  );
}

export default RoomList