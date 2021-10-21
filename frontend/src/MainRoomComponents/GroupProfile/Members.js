import React, { useState, useEffect } from 'react';
import { CircularProgress } from '@material-ui/core';
import './GroupProfile.css';
import Member from './Member';
import axios from 'axios';

function Members(props) {

    const [memberIdList, setMemberIdList] = useState([])
    const member_IdList = []

    // get members of room
    useEffect( async () => {
        await axios.get(`http://localhost:5000/room/${props.roomId}`).then((res) => {
            member_IdList.push(res.data.members)
        })
        setMemberIdList(memberIdList => member_IdList)
    }, [memberIdList])


    // get members' information
    const [memberList, setMemberList] = useState([])
    const member_List = []
    const [loading, setLoading] = useState(false)

    function checkLoaded() {
        if (memberList.length != 0) {
            setLoading(true)
        } else if (member_List.length == 0 && memberList.length == 0) {
            setLoading(true)
        }
    }

    useEffect( async () => {
        if (memberIdList.length == 1){
            for (let i=0; i < memberIdList[0].length; i++) {
                await axios.get(`http://localhost:5000/user/${memberIdList[0][i]}`).then((res) => {
                    const {_id, name, username, password, email, toDoList, rooms, avatarID1, avatarID2, friends, __v} = res.data;
                    member_List.push({_id, name, username, password, email, toDoList, rooms, avatarID1, avatarID2, friends, __v})
                })
            }
            if (member_List.length > 0) {
                setMemberList(memberList => member_List)
                console.log(memberList)
            }
        }
        setTimeout(checkLoaded, 5000)
    }, [memberIdList, memberList])

    return (
        <div className = "members_container">
            {loading? (!memberList.length ? <Member hasMember = 'false'/> : memberList.map((member) => <Member hasMember = 'true' key = {member._id} memberAvatar = {member.avatarID1} memberHat = {member.avatarID2} memberName = {member.name}/>)) : 
                <CircularProgress style = {{'color': 'lavender', 'marginLeft': '45%', 'marginTop': '5%'}}/>            
            }
        </div>
    )
}

export default Members;