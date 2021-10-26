import React, { useEffect, useState } from 'react';
import { IconButton, CircularProgress } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close'
import axios from 'axios';
import FriendRequest from './FriendRequest';

function FriendRequestPopUp(props) {

    const [requestList, setRequestList] = useState([]);
    const requestIdList = [];
    const [rerenderRequest, setRerenderRequest] = useState(true)

    // get friend requests of user
    useEffect(async () => {
        await axios.get(`http://localhost:5000/user/${props.userId}`).then((res) => {
            requestIdList.push(res.data.friendsToAdd)
        })
        setRequestList(requestList => requestIdList)
    }, [rerenderRequest])


    // get name of requester
    const [requestNameList, setRequestNameList] = useState([]);
    const request_NameList = []
    const [loading, setLoading] = useState(false)

    function checkLoaded() {
        if (requestNameList.length != 0) {
            setLoading(true)
            setRerenderRequest(false)
        } else if (request_NameList.length == 0) {
            setLoading(true)
            setRerenderRequest(false)
        }
    }

    const rerenderFriendList = () => {
        props.handleClose();
        props.rerender();
    }

    useEffect(async () => {
        console.log('request rendering')
        if (requestList.length == 1) {
            for (let i = 0; i < requestList[0].length; i++) {
                await axios.get(`http://localhost:5000/user/${requestList[0][i]}`).then((res) => {
                    const {_id, name, username, password, email, toDoList, rooms, avatarID1, avatarID2, friends, __v} = res.data;
                    request_NameList.push({_id, name, username, password, email, toDoList, rooms, avatarID1, avatarID2, friends, __v})
                })
            }
        }  
        if (request_NameList.length > 0) {
            setRequestNameList(requestNameList => request_NameList);
            
        }
        setTimeout(checkLoaded, 5000)
    }, [requestList]) 

    
    return (
        <div className = "FriendRequestPopUp">
            <div className = "FriendRequestPopUp-inner">   
                <IconButton className = "closePopUp" onClick={rerenderFriendList} >
                    <CloseIcon/>
                </IconButton>
                <h1>FriendRequests</h1>
                <div className = "request-container">
                    {loading ? (!requestNameList.length ? <FriendRequest haveRequest = 'false'/> : requestNameList.map((request) => <FriendRequest key = {request._id} requestId = {request._id} requestName = {request.name} userId = {props.userId} haveRequest = 'true'/>)) :
                        <CircularProgress style = {{'color': 'lavender', 'marginLeft': '45%', 'marginTop': '3%'}}/>
                    }
                </div>
            </div>
        </div>
    )
}

export default FriendRequestPopUp