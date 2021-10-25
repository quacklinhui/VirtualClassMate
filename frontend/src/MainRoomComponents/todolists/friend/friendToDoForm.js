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

const FriendForm = ({currentId, setCurrentId, referenceID}) => {

    const [toDoData, setToDoData]=useState({name:'',type:'', referenceID:''});
    const todoitem = useSelector((state) => currentId? state.PersonalToDoList.find((p)=>p._id === currentId) : null);
    const dispatch = useDispatch();
    
    useEffect(()=>{
      dispatch(getPersonalTodo(referenceID));
    },[referenceID,currentId,dispatch])
    
    useEffect(()=>{
        if(todoitem) setToDoData(todoitem);
    },[todoitem])
    const clear = () => {
        setCurrentId(null);
        setToDoData({name:''});
    }
    return(
        <Paper style={{width:"20vw", backgroundColor: '#DCDCDC', height:50, bottomPadding:20}} >
            
            <Typography style={{textAlign:"center"}}>
            What your friend is up to:
            </Typography>

            <FriendToDoLists setCurrentId={setCurrentId}/>
        </Paper>
    );
}

export default FriendForm;