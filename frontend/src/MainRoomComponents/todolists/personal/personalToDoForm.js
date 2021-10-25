import React, { useEffect } from "react";
import {useState} from 'react';
import {Button, Typography, Paper, Box, Container, TextField} from '@material-ui/core';
import { createPersonalTodo, updateTodo } from "../../../actions/todo";
import {useDispatch} from 'react-redux';
import { useSelector } from "react-redux";
import PersonalToDoLists from "./personaltodolist";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import { getPersonalTodo } from '../../../actions/todo';
import {GroupForm} from "../group/groupToDoForm"

const PersonalForm = ({currentId, setCurrentId, type, referenceID}) => {

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
    useEffect(()=>{
      dispatch(getPersonalTodo(referenceID));
    },[referenceID,currentId,dispatch,clear])
    return(
        <Paper style={{width:"45%", backgroundColor: '#8A2BE290', height:50, bottomPadding:20}} >
             <form autoComplete="off" noValidate  onSubmit={handleSubmit}>
                <Button style={{width:"100%",height:50}} onClick={()=>{setShowPersonalToDoList(true)}}>
                  Personal
                </Button>
                <PersonalToDoLists setCurrentId={setCurrentId}/>
                <Paper style = {{backgroundColor: 'white', display: "flex",flexDirection: 'row', height:50, padding:5}}>
                  <TextField style={{padding:5}} name = 'name'  dvariant = "outlined" fullWidth value={toDoData.name} size = 'small' onChange ={(e)=>setToDoData({...toDoData,name: e.target.value, type:type, referenceID: referenceID})} />
                  <Button type = "submit" style ={{backgroundColor:'#DCDCDC', margin:5}}>
                    <ControlPointIcon/>
                  </Button>
                </Paper>
                </form>
          </Paper>
    );
}

export default PersonalForm;