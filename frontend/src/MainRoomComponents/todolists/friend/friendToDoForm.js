import React, { useEffect } from "react";
import {useState} from 'react';
import {Button, Typography, Paper, Box, Container, TextField} from '@material-ui/core';
import { createPersonalTodo, updateTodo } from "../../../actions/todo";
import {useDispatch} from 'react-redux';
import { useSelector } from "react-redux";
import FriendToDoLists from "./friendtodolist";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import { getPersonalTodo } from '../../../actions/todo';

const FriendForm = ({currentId, setCurrentId, referenceID, friendName}) => {

    const [toDoData, setToDoData]=useState({name:'',type:'', referenceID:''});
    const todoitem = useSelector((state) => referenceID? state.PersonalToDoList.find((p)=>p._id === referenceID) : null);
    const dispatch = useDispatch();
    
    useEffect(()=>{
      dispatch(getPersonalTodo(referenceID));
    },[referenceID,referenceID,dispatch])
    
    useEffect(()=>{
        if(todoitem) setToDoData(todoitem);
    },[todoitem])
    const clear = () => {
        setCurrentId(null);
        setToDoData({name:''});
    }
    return(
        <Paper style={{position: "relative",width:"20vw", left: "-20vw",backgroundColor: '#DCDCDC', height:50, bottomPadding:20}} >
            
            <Typography style={{textAlign:"center"}}>
            {friendName}'s to do list:
            </Typography>

            <FriendToDoLists setCurrentId={setCurrentId}/>
        </Paper>
    );
}

export default FriendForm;