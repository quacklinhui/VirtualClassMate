import React from "react";
import {Box,Paper,CardActions,CardContent,CardMedia,Button,Typography, IconButton } from '@material-ui/core';
//import { AiFillCaretDown, AiOutlinePlus,AiFillCaretUp,AiFillDelete } from 'react-icons/ai';
//import {RiCheckboxBlankLine, RiCheckboxLine} from 'react-icons/ri';
import {useState} from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import {useDispatch} from 'react-redux';
import {deleteTodo} from '../../../actions/todo'
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';


function FriendToDoItem({todo}){
    const dispatch = useDispatch();
    return(
        <Box style={{marginLeft: "5%",width:"90%",  borderRadius: '10px'}}>            
            <div>
                <Typography style={{color:"black",  textAlign:"center"}}> {todo.name}</Typography>
            </div>
        </Box>
    )
}


export default FriendToDoItem;