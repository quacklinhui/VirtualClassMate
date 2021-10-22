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

const FriendForm = ({currentId, setCurrentId, type, referenceID}) => {

    const [toDoData, setToDoData]=useState({name:'',type:'', referenceID:''});
    const [showPersonalToDoList, setShowPersonalToDoList] = React.useState(false)
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
    const handleSubmit=(e)=>{
        e.preventDefault();

        if(currentId){
          dispatch(updateTodo(currentId, toDoData))
        }
        else{
          dispatch(createPersonalTodo(referenceID,toDoData));
        }
        clear();
    

    }
    return(
        <Paper style={{width:"20vw", backgroundColor: 'grey', height:50, bottomPadding:20}} >
                <FriendToDoLists setCurrentId={setCurrentId}/>
          </Paper>
    );
}

export default FriendForm;