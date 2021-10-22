import React, { useEffect } from "react";
import {useState} from 'react';
import {Button, Paper, TextField} from '@material-ui/core';
import { createGroupTodo, updateGroupTodo } from "../../../actions/todo";
import {useDispatch} from 'react-redux';
import { useSelector } from "react-redux";
import GroupToDoLists from "../group/grouptodolist";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import { getGroupTodo } from '../../../actions/todo';

const GroupForm = ({currentGroupId, setCurrentGroupId, type, referenceID}) => {

    const [groupToDoData, setGroupToDoData]=useState({name:'',type:'', referenceID:''});
    const [showGroupToDoList, setShowGroupToDoList] = React.useState(false)
    const todoitem = useSelector((state) => currentGroupId? state.GroupToDoList.find((p)=>p._id === currentGroupId) : null);
    const dispatch = useDispatch();
    
    
    useEffect(()=>{
        if(todoitem) setGroupToDoData(todoitem);
    },[todoitem])
    const clear = () => {
        setCurrentGroupId(null);
        setGroupToDoData({name:''});
      }
    const handleGroupSubmit=(e)=>{
        e.preventDefault();

        if(currentGroupId){
          dispatch(updateGroupTodo(currentGroupId, groupToDoData))//this one should be the problem
        }
        else{
          dispatch(createGroupTodo(referenceID,groupToDoData));
        }
        clear();
    }
    useEffect(()=>{
      dispatch(getGroupTodo(referenceID));
    },[referenceID,currentGroupId,dispatch,clear])
    return(
        <Paper style={{width:"45%",marginLeft:"5%", backgroundColor: "#8A2BE290", height:50}}>
            <form autoComplete="off" noValidate  onSubmit={handleGroupSubmit}>
                <Button style={{width:"100%",height:50}} onClick={()=>{showGroupToDoList?setShowGroupToDoList(false): setShowGroupToDoList(true)}}>GROUP
                { showGroupToDoList ? <ArrowDropDownIcon style={{ color:"black", height:"80%", width:"10%", position:"absolute", right:20}}/> : <ArrowDropDownIcon style={{ color:"white", height:"80%", width:"10%", position:"absolute", right:20}}/>  }
                </Button>
                    
                { showGroupToDoList ? <GroupToDoLists setCurrentGroupId={setCurrentGroupId}/> : null }
                {/* <TextField fullWidth id="groupToDoListInput" variant="outlined" size = 'small' /> */}
                <Paper style = {{backgroundColor: 'white', display: "flex",flexDirection: 'row', height:50, padding:5}}>
                <TextField style={{padding:5}} name = 'groupToDoListInput'  dvariant = "outlined" fullWidth value={groupToDoData.name} size = 'small' onChange ={(e)=>setGroupToDoData({...groupToDoData,name: e.target.value,type:type,referenceID:referenceID})}/>
                    <Button type = "submit" style ={{backgroundColor:'#DCDCDC', margin:5}}>
                    <ControlPointIcon/>
                    </Button>
                </Paper>  
            </form>
          </Paper>
    );
}

export default GroupForm;