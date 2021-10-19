import React, { useEffect } from "react";
import {useState} from 'react';
import {Button, Typography, Paper, Box, Container, TextField} from '@material-ui/core';
import { createGroupTodo, updateTodo } from "../../../actions/todo";
import {useDispatch} from 'react-redux';
import { useSelector } from "react-redux";
import GroupToDoLists from "../group/grouptodolist";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import { getGroupTodo } from '../../../actions/todo';

const GroupForm = ({currentId, setCurrentId, type, referenceID}) => {

    const [groupToDoData, setGroupToDoData]=useState({name:'',type:type, referenceID:referenceID});
    const [showGroupToDoList, setShowGroupToDoList] = React.useState(false)
    const todoitem = useSelector((state) => currentId? state.GroupToDoList.find((p)=>p._id === currentId) : null);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getGroupTodo(referenceID));
      },[referenceID,currentId,dispatch])
    useEffect(()=>{
        if(todoitem) setGroupToDoData(todoitem);
    },[todoitem])
    const clear = () => {
        setCurrentId(null);
        setGroupToDoData({name:''});
      }
    const handleSubmit=(e)=>{
        e.preventDefault();

        if(currentId){
          dispatch(updateTodo(currentId, groupToDoData))
        }
        else{
          dispatch(createGroupTodo(referenceID,groupToDoData));
        }
        clear();
    

    }
    return(
        <Paper style={{width:"45%",marginLeft:"5%", backgroundColor: "#8A2BE290", height:50}}>
            <form autoComplete="off" noValidate  onSubmit={handleSubmit}>
                <Button style={{width:"100%",height:50}} onClick={()=>{showGroupToDoList?setShowGroupToDoList(false): setShowGroupToDoList(true)}}>GROUP
                { showGroupToDoList ? <ArrowDropDownIcon style={{ color:"black", height:"80%", width:"10%", position:"absolute", right:20}}/> : <ArrowDropDownIcon style={{ color:"white", height:"80%", width:"10%", position:"absolute", right:20}}/>  }
                </Button>
                    
                { showGroupToDoList ? <GroupToDoLists setCurrentId={setCurrentId}/> : null }
                {/* <TextField fullWidth id="groupToDoListInput" variant="outlined" size = 'small' /> */}
                <Paper style = {{backgroundColor: 'white', display: "flex",flexDirection: 'row', height:50, padding:5}}>
                <TextField style={{padding:5}} name = 'groupToDoListInput'  dvariant = "outlined" fullWidth value={groupToDoData.name} size = 'small' onChange ={(e)=>setGroupToDoData({...groupToDoData,name: e.target.value})}/>
                    <Button type = "submit" style ={{backgroundColor:'#DCDCDC', margin:5}}>
                    <ControlPointIcon/>
                    </Button>
                </Paper>  
            </form>
          </Paper>
    );
}

export default GroupForm;