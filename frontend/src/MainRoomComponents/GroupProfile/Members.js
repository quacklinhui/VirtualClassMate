import React, { useState, useEffect } from 'react';
import { CircularProgress } from '@material-ui/core';
import './GroupProfile.css';
import Member from './Member';
import axios from 'axios';

function Members(props) {

    const [memberIdList, setMemberIdList] = useState([])
    const member_IdList = []
    const [admin, setAdmin] = useState({})

    // get members of room
    useEffect( async () => {
        await axios.get(`http://localhost:5000/room/${props.roomId}`).then((res) => {
            member_IdList.push(res.data.members)
            setAdmin(admin => res.data.admin)
        })
        setMemberIdList(memberIdList => member_IdList)
    }, [props.rerender])


    // get members' information
    const [memberList, setMemberList] = useState([])
    const member_List = []
    const [loading, setLoading] = useState(false)

    function checkLoaded() {
        if (memberList.length != 0) {
            setLoading(true)
            props.stopRerender();
        } else if (member_List.length == 0 && memberList.length == 0) {
            setLoading(true)
            props.stopRerender();
        }
    }

    function checkIfMemberIsOnline(memberId) {
        var online = false;
        if (memberId === props.currentUserId){
            return true;
        }
        for (const index in props.onlineMembers){
            if (memberId === props.onlineMembers[index].userId){
                online = true;
                break;
            }
        }
        return online;
    }

    useEffect( async () => {
        if (memberIdList.length == 1){
            for (let i=0; i < memberIdList[0].length; i++) {
                await axios.get(`http://localhost:5000/user/${memberIdList[0][i]}`).then((res) => {
                    const {_id, name, username, password, email, toDoList, rooms, avatarID1, avatarID2, friends, __v} = res.data;
                    if (res.data._id != props.currentUserId){
                        member_List.push({_id, name, username, password, email, toDoList, rooms, avatarID1, avatarID2, friends, __v})
                    }
                })
            }
            if (admin != props.currentUserId) {
                await axios.get(`http://localhost:5000/user/${admin}`).then((res) => {
                    const {_id, name, username, password, email, toDoList, rooms, avatarID1, avatarID2, friends, __v} = res.data;
                    member_List.push({_id, name, username, password, email, toDoList, rooms, avatarID1, avatarID2, friends, __v})
                })
            }
            if (member_List.length > 0) {
                setMemberList(memberList => member_List)
            }
        }
        setTimeout(checkLoaded, 3000)
    }, [memberIdList])

    var membersProfile = memberList.map((member) => <Member hasMember = {'true'} key = {member._id} memberAvatar = {member.avatarID1} memberName = {member.name} onlineStatus = {checkIfMemberIsOnline(member._id.toString())}/>);
    console.log(membersProfile);

    return (
        <div className = "members_container">
            {loading ? (memberList.length ? membersProfile : <Member hasMember = 'false'/>) : 
                <CircularProgress style = {{'color': 'lavender', 'marginTop': '6%'}}/>            
            }
           
        </div>
    )
}

export default Members;