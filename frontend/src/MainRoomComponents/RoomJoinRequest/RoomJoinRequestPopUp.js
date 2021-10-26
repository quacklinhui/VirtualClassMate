import React, { useState, useEffect } from 'react';
import './RoomJoinRequest.css';
import axios from 'axios';
import CloseIcon from '@material-ui/icons/Close';
import {IconButton, CircularProgress} from '@material-ui/core';
import RoomJoinRequest from './RoomJoinRequest'

function RoomJoinRequestPopUp(props) {

    const [requestList, setRequestList] = useState([])
    const requestIdList = [];

    //get friends that requested to be in the room
    useEffect(async () => {
        await axios.get(`http://localhost:5000/room/${props.roomId}`).then((res) => {
            requestIdList.push(res.data.requestList) 
        })
        if (requestIdList.length > 0) {
            setRequestList(requestList => requestIdList)
        }
    }, [requestList])

    const [requestNameList, setRequestNameList] = useState([]);
    const request_NameList = []
    const [loading, setLoading] = useState(false)

    function checkLoaded(_id) {
        if (requestNameList.length != 0) {
            setLoading(true)
        } else if (_id === undefined) {
            setLoading(true)
        }
    }

    // get requestList names
    useEffect(async () => {
        if (requestList.length > 0){
            for (let i = 0; i < requestList.length; i++) {
                await axios.get(`http://localhost:5000/user/${requestList[i]}`).then((res) => {
                    const {_id, name, username, password, email, toDoList, rooms, avatarID1, avatarID2, friends, __v} = res.data;
                    request_NameList.push({_id, name, username, password, email, toDoList, rooms, avatarID1, avatarID2, friends, __v})
                })
            }
            if (request_NameList[0]._id !== undefined){
                setRequestNameList(requestNameList => request_NameList)
            } 
            setTimeout(checkLoaded(request_NameList[0]._id), 7000) 
        }
        
    }, [requestList])

    const closePopUp = () => {
        props.handleClose();
        props.rerenderRoom();
    }

    return(
        <div className = "PopUp">
            <div className = "popup-inner">
                <IconButton className = "closePopUp" onClick = {closePopUp}>
                    <CloseIcon/>
                </IconButton>
                <h1>Join Room Requests</h1>
                <div className = "requestsToAccept">
                    {loading ? (!requestNameList.length ? <RoomJoinRequest hasRequest = 'false'/> : requestNameList.map((request) => <RoomJoinRequest key = {request._id} hasRequest = 'true' userId = {props.userId} newMemberId = {request._id} newMemberName = {request.name} roomId = {props.roomId}/>)) :
                        <CircularProgress style = {{'color': 'lavender', 'marginLeft': '45%', 'marginTop': '5%'}}/>
                    }
                </div>
            </div>
            
        </div>
    ) 
}

export default RoomJoinRequestPopUp