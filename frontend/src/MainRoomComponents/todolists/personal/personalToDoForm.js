import React, { useEffect } from "react";
import {useState} from 'react';
import {Button, Paper, TextField} from '@material-ui/core';
import { createPersonalTodo, updateTodo } from "../../../actions/todo";
import {useDispatch} from 'react-redux';
import { useSelector } from "react-redux";
import PersonalToDoLists from "./personaltodolist";
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import { getPersonalTodo } from '../../../actions/todo';

const PersonalForm = ({currentId, setCurrentId, type, referenceID}) => {

    const [toDoData, setToDoData]=useState({name:'',type:'', referenceID:''});
    const todoitem = useSelector((state) => currentId? state.PersonalToDoList.find((p)=>p._id === currentId) : null);
    const dispatch = useDispatch();

    // used for edit/delete todoitem
    useEffect(()=>{
        if(todoitem) setToDoData(todoitem);
    },[todoitem])

    // to clear text field
    const clear = () => {
      setCurrentId(null);
      setToDoData({name:''});
    }
    
    // function performed on submit
    const handleSubmit=(e)=>{
      e.preventDefault();
      if(currentId){
        dispatch(updateTodo(currentId, toDoData))
      }
      else{
        dispatch(createPersonalTodo(referenceID, toDoData));
      }
      clear();
    }

    useEffect(()=>{
      dispatch(getPersonalTodo(referenceID));
    },[referenceID, currentId, dispatch])

    return(
      <Paper style={{width:"45%", backgroundColor: 'white', height:50, bottomPadding:20}} >
        <form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <Paper style={{width:"100%",height:50, backgroundColor: "#8A2BE290", flex:1,justifyContent:"center",textAlign:"center", textAlignVertical:"center", display:"flex", alignItems:"center"}}>
            PERSONAL              
          </Paper>
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