import React, { useEffect } from "react";
import {useState} from 'react';
import {Button, Paper, TextField} from '@material-ui/core';
import { createGroupTodo, updateGroupTodo } from "../../../actions/todo";
import {useDispatch} from 'react-redux';
import { useSelector } from "react-redux";
import GroupToDoLists from "../group/grouptodolist";
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import { getGroupTodo } from '../../../actions/todo';

const GroupForm = ({currentGroupId, setCurrentGroupId, type, referenceID}) => {

    const [groupToDoData, setGroupToDoData]=useState({name:'',type:'', referenceID:''});
    const grouptodoitem = useSelector((state) => currentGroupId? state.GroupToDoList.find((p)=>p._id === currentGroupId) : null);
    const dispatch = useDispatch();
    
    useEffect(()=>{
        if(grouptodoitem) setGroupToDoData(grouptodoitem);
    },[grouptodoitem])

    const clear = () => {
        setCurrentGroupId(null);
        setGroupToDoData({name:''});
    }

    const handleGroupSubmit=(e)=>{
      e.preventDefault();
      if(currentGroupId){
        dispatch(updateGroupTodo(currentGroupId, groupToDoData));
      }
      else{
        dispatch(createGroupTodo(referenceID, groupToDoData));
      }
      clear();
    }

    useEffect(()=>{
      dispatch(getGroupTodo(referenceID));
    },[referenceID, currentGroupId, dispatch])

    return(
      <Paper style={{width:"45%",marginLeft:"5%", backgroundColor: "white", height:50, bottomPadding:20}}>
        <form autoComplete="off" noValidate  onSubmit={handleGroupSubmit}>
          <Paper style={{width:"100%",height:50, backgroundColor: "#8A2BE290", flex:1,justifyContent:"center",textAlign:"center", textAlignVertical:"center", display:"flex", alignItems:"center"}}>
            GROUP        
          </Paper>
          <GroupToDoLists setCurrentGroupId={setCurrentGroupId}/>
          <Paper style = {{backgroundColor: 'white', display: "flex",flexDirection: 'row', height:50, padding:5}}>
            <TextField style={{padding:5}} name = 'groupToDoListInput'  dvariant = "outlined" fullWidth value={groupToDoData.name} size = 'small' onChange ={(e)=>setGroupToDoData({...groupToDoData,name: e.target.value, type:type, referenceID:referenceID})}/>
              <Button type = "submit" style ={{backgroundColor:'#DCDCDC', margin:5}}>
                <ControlPointIcon/>
              </Button>
          </Paper>  
        </form>
      </Paper>
    );
}

export default GroupForm;