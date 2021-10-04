import React, { useEffect } from "react";
import {useState} from 'react';
import {Button, Typography, Paper, Box, Container, TextField} from '@material-ui/core';
import { createTodo, updateTodo } from "../../actions/todo";
import {useDispatch} from 'react-redux';
import { useSelector } from "react-redux";
import ToDoLists from "./todolist";


const PersonalForm = ({currentId, setCurrentId}) => {

    const [toDoData, setToDoData]=useState({name:'',description:'',deadline:''});
    const [showPersonalToDoList, setShowPersonalToDoList] = React.useState(false)
    const todoitem = useSelector((state) => currentId? state.toDoList.find((p)=>p._id === currentId) : null);
    const dispatch = useDispatch();
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
          dispatch(createTodo(toDoData));
        }
        clear();
    

    }
    return(
        <Paper style={{width:"45%", backgroundColor: '#8A2BE290', height:50, bottomPadding:20}} >
             <form autoComplete="off" noValidate  onSubmit={handleSubmit}>
                <Button style={{width:"100%",height:50}} onClick={()=>{showPersonalToDoList?setShowPersonalToDoList(false): setShowPersonalToDoList(true)}}>
                  Personal
                  {/* { showPersonalToDoList ? <AiFillCaretDown style={{ color:"black", height:"80%", width:"10%", position:"absolute", right:20}}/> : <AiFillCaretDown style={{ color:"white", height:"90%", width:"10%",position:"absolute", right:20}}/>  } */}
                </Button>
                { showPersonalToDoList ? <ToDoLists setCurrentId={setCurrentId}/> : null }
                <Paper style = {{backgroundColor: 'white', display: "flex",flexDirection: 'row', height:50, padding:5}}>
                  <TextField style={{padding:5}} name = 'name'  dvariant = "outlined" fullWidth value={toDoData.name} size = 'small' onChange ={(e)=>setToDoData({...toDoData,name: e.target.value})} />
                  <Button type = "submit" style ={{backgroundColor:'#DCDCDC', margin:5}}>
                    {/* <AiOutlinePlus/> */}
                  </Button>
                </Paper>
                
                {/* <TextField  name = 'description' variant = "outlined" label = "Description" fullWidth value={toDoData.description} onChange ={(e)=>setToDoData({...toDoData,description: e.target.value})} /> */}
                {/* <TextField  name = 'deadline' variant = "outlined" label = "Deadline" fullWidth value={toDoData.deadline} onChange ={(e)=>setToDoData({...toDoData,deadline: e.target.value})} /> */}
                {/* <DatePicker selected={toDoData.deadline} onChange ={(e)=>setToDoData({...toDoData,deadline: e.target.value})} /> */}
                {/* <button variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</button> */}
             </form>
          </Paper>
    );
}

export default PersonalForm;