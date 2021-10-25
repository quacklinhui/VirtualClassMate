import React from "react";
import {Box,Paper,CardActions,CardContent,CardMedia,Button,Typography, IconButton } from '@material-ui/core';
//import { AiFillCaretDown, AiOutlinePlus,AiFillCaretUp,AiFillDelete } from 'react-icons/ai';
//import {RiCheckboxBlankLine, RiCheckboxLine} from 'react-icons/ri';
import {useState} from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import {useDispatch} from 'react-redux';
import {deleteTodo, completeTodo} from '../../../actions/todo'
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';


function GroupToDoItem({todo, setCurrentGroupId}){
    const [checkBox, setCheckBox] = React.useState(false)
    const dispatch = useDispatch();
    return(
        <Box style={{height:100, justifyContent:"center",alignItems:"center",marginLeft: "5%",width:"90%",justifySelf:"center", alignSelf:"center", backgroundColor: 'rgb(159, 136, 180)', borderRadius: '10px',display: "flex",flexDirection: 'row',}}>            
        {checkBox?<Box style={{width:'90%',height:100, position:"absolute", backgroundColor:"#00000080",borderRadius:10}}></Box>   :null}
            <IconButton onClick={()=>dispatch(completeTodo(todo._id))} disableRipple disableFocusRipple style={{backgroundColor: 'transparent', position:"absolute", left:'2vw',  height:40}}>
                { checkBox ? <CheckBoxIcon/>: <CheckBoxOutlineBlankIcon/> } 
                </IconButton>
            <div>
                <Typography style={{color:"white", margin: 50}}> {todo.name}</Typography>
            </div>

            <IconButton size= "small" style={{backgroundColor: 'transparent', position:"absolute",right: '2vw'}} onClick={()=>dispatch(deleteTodo(todo._id))} >
                <DeleteIcon/>
            </IconButton>
            <IconButton size= "small" onClick={()=>setCurrentGroupId(todo._id)} style={{backgroundColor: 'transparent', position:"absolute", right:'4vw'}}>
                <EditIcon/>
            </IconButton>
        </Box>
    )
}


export default GroupToDoItem;