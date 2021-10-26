import React, { useState, useEffect } from 'react';
import axios from 'axios'
import RoomButtons from './RoomButton';
import {CircularProgress} from '@material-ui/core'
import { propTypes } from 'react-bootstrap/esm/Image';


function RoomList({id, username, avatar, name, rerender, stopRerender}){  
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
  }, [rerender])

  const [roomList, setRoomList] = useState([]);
  const [loading, setLoading] = useState(false);

  const roomId = user.rooms;
  var rooms_list = []

  function checkLoaded() {
    if (roomList.length != 0) {
        setLoading(true)
    } else if (rooms_list.length == 0 && roomList.length == 0) {
        setLoading(true)
    }
    stopRerender();
  } 

  useEffect( async () => {
    // if rerender == true
    if (rerender) {
      for (let i = 0; i < roomId.length; i++) {
        await axios.get(`http://localhost:5000/room/${roomId[i]}`).then((res) => {
          const {_id, name, description, admin, members, toDoList, chat, requestList, __v} = res.data;
          rooms_list.push({_id, name, description, admin, members, toDoList, chat, requestList, __v})
        })
      }
      if (rooms_list.length > 0){
        setRoomList(roomList => rooms_list)
      }
    }  
    setTimeout(checkLoaded, 5000)
  },[user])

  return(
    <>
      <div style = {{display: 'flex', flexDirection: 'column', width: '32%'}}>
        <div style = {{width: '300px', fontWeight: 'bold'}}>Your Rooms</div>
          <div style = {{backgroundColor: 'rgb(203, 184, 221)', borderRadius: '10px', width: '100%', height: '20%', position: 'relative'}}>
            <div className = "rooms">
              {loading? (!roomList.length ? <RoomButtons isRoom = 'false'/> : roomList.map((room) => <RoomButtons key={room._id} id = {id} username = {username} avatar = {avatar} name = {name} room = {room.name} roomId = {room._id} isRoom = 'true'/>)) : 
                <CircularProgress style = {{'color': 'lavender', 'marginLeft': '45%', 'marginTop': '5%'}}/>}
            </div>
        </div> 
      </div>
    </>
  );
}

export default RoomList