import React, { useEffect } from "react";
import NavBar from '../HomeComponents/NavBar/NavBar';
import {Button, Typography, Paper, Box, Container, TextField} from '@material-ui/core'
import {useState} from 'react';
import {BrowserRouter as Router,  useHistory} from "react-router-dom";
import {useDispatch} from 'react-redux';
import { createTodo } from '../actions/todo';
import { getTodo } from '../actions/todo';
import ToDoLists from "./todolists/todolist";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
//import { AiFillCaretDown, AiOutlinePlus,AiFillCaretUp } from 'react-icons/ai';
import useWindowDimensions from "../useWindowDimensions";

//import { faCoffee } from '@fortawesome/fontawesome-free-solid';

// To do: the number of buttons should be dynamically formed based on the database
function RoomPage() {
const { windowHeight, windowWidth } = useWindowDimensions();
let history = useHistory();
const [createPopUp, setCreatePopUp] = useState(false); //set the default state to false
const [showPersonalToDoList, setShowPersonalToDoList] = React.useState(false)
const [showGroupToDoList, setShowGroupToDoList] = React.useState(false)
const [toDoData, setToDoData]=useState({name:'',description:'',deadline:''});
const [groupToDoData, setGroupToDoData]=useState({groupToDo:''});
const dispatch = useDispatch();
    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(createTodo(toDoData));
    }
    useEffect(()=>{
      dispatch(getTodo());
  },[dispatch])
  return (
      <div>
      <div>
        <NavBar />
      </div>
      
      <Container style={{alignItems:"center", alignContent:"center",textAlign: "center",}}>
        <div style ={{display: "flex",flexDirection: 'row',height: 30,paddingTop: 20, paddingBottom:20,justifyContent:"center"}}>
            <div>
            <Typography> You are in: "Insert RoomName"</Typography>
            <Typography> "Insert Description"</Typography>
            </div>

            <Button style={{position:"absolute", right: 20,alignSelf: "flex-end", backgroundColor: "orange"}} onClick={() => { history.push("/home")}}>Back to HomePage</Button>
          </div>
          <div style ={{padding:20,display: "flex",flexDirection: 'row',height: 30,paddingTop: 5, width: "70%"}}>
          
          <Paper style={{width:"45%", backgroundColor: '#8A2BE290', height:50, bottomPadding:20}} >
             <form autoComplete="off" noValidate  onSubmit={handleSubmit}>
                <Button style={{width:"100%",height:50}} onClick={()=>{showPersonalToDoList?setShowPersonalToDoList(false): setShowPersonalToDoList(true)}}>
                  Personal
                  {/* { showPersonalToDoList ? <AiFillCaretDown style={{ color:"black", height:"80%", width:"10%", position:"absolute", right:20}}/> : <AiFillCaretDown style={{ color:"white", height:"90%", width:"10%",position:"absolute", right:20}}/>  } */}
                </Button>
                { showPersonalToDoList ? <ToDoLists /> : null }
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

        <Paper style={{width:"45%",marginLeft:"5%", backgroundColor: "#8A2BE290", height:50}}>

              <Button style={{width:"100%",height:50}} onClick={()=>{showGroupToDoList?setShowGroupToDoList(false): setShowGroupToDoList(true)}}>GROUP
              {/* { showGroupToDoList ? <AiFillCaretDown style={{ color:"black", height:"80%", width:"10%", position:"absolute", right:20}}/> : <AiFillCaretDown style={{ color:"white", height:"80%", width:"10%", position:"absolute", right:20}}/>  } */}
              </Button>
              
              { showGroupToDoList ? <ToDoLists /> : null }
              {/* <TextField fullWidth id="groupToDoListInput" variant="outlined" size = 'small' /> */}
              <Paper style = {{backgroundColor: 'white', display: "flex",flexDirection: 'row', height:50, padding:5}}>
                <TextField style={{padding:5}} name = 'groupToDoListInput'  dvariant = "outlined" fullWidth value={groupToDoData.groupToDo} size = 'small' onChange ={(e)=>setGroupToDoData({...groupToDoData,groupToDo: e.target.value})}/>
                <Button type = "submitGrp" style ={{backgroundColor:'#DCDCDC', margin:5}}>
                  {/* <AiOutlinePlus/> */}
                  </Button>
              </Paper>  
          </Paper>
            
            <Container style={{width:"25%", backgroundColor: "#D8ABEC60", position: "absolute", right: 20}}>
                <Button>Chat</Button>
                <TextField fullWidth id="chatInput" variant="outlined" size = 'small'  />
            </Container>
          </div>

      </Container>
      </div>
    );
  }
  
  export default RoomPage;