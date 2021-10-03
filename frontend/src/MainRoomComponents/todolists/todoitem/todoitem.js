import React from "react";
import {Box,Paper,CardActions,CardContent,CardMedia,Button,Typography, IconButton } from '@material-ui/core';
//import { AiFillCaretDown, AiOutlinePlus,AiFillCaretUp,AiFillDelete } from 'react-icons/ai';
//import {RiCheckboxBlankLine, RiCheckboxLine} from 'react-icons/ri';
import {useState} from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import {useDispatch} from 'react-redux';
import {deleteTodo} from '../../../actions/todo';


function ToDoItem({todo}){
    const [checkBox, setCheckBox] = React.useState(false)
    const dispatch = useDispatch();
    return(
        <Box style={{height:100, justifyContent:"center",alignItems:"center",marginLeft: "5%",width:"90%",justifySelf:"center", alignSelf:"center", backgroundColor: 'rgb(159, 136, 180)', borderRadius: '10px',display: "flex",flexDirection: 'row',}}>            
        {checkBox?<Box style={{width:'90%',height:100, position:"absolute", backgroundColor:"#00000080",borderRadius:10}}></Box>   :null}
            <IconButton onClick={()=>{checkBox?setCheckBox(false): setCheckBox(true)}} disableRipple disableFocusRipple style={{backgroundColor: 'transparent', position:"absolute", left:30, top: '50%', marginTop:-20, height:40}}>
                {/* { checkBox ? <RiCheckboxLine/>: <RiCheckboxBlankLine/> } */}
                </IconButton>
            <div>
                <Typography style={{color:"white"}}> {todo.name}</Typography>
                <Typography style={{color:"white"}}> {todo.description}</Typography>
                <Typography style={{color:"white"}}>{todo.deadline}</Typography>
                <Typography style={{color:"white"}}>{todo.status}</Typography>
            </div>
            {/* <IconButton disableRipple disableFocusRipple style={{backgroundColor: 'transparent', top: '50%', marginTop:-20, height:40, position:"absolute", right:30}}> */}
                {/* <AiFillDelete/> */}
                {/* </IconButton> */}
            <Button size= "small" onClick={()=>dispatch(deleteTodo(todo._id))}>
                <DeleteIcon/>
            </Button>
        </Box>
    )
}


export default ToDoItem;