import React from "react";
import {Box,Paper,CardActions,CardContent,CardMedia,Button,Typography, IconButton } from '@material-ui/core';
import { AiFillCaretDown, AiOutlinePlus,AiFillCaretUp,AiFillDelete } from 'react-icons/ai';
import {RiCheckboxBlankLine, RiCheckboxLine} from 'react-icons/ri';
import {useState} from 'react';


// const ToDoItem = ({todo}) => {
// const [checkBox, setCheckBox] = React.useState(false)
//     return (
//         <Box style={{justifyContent:"center",marginLeft: "5%",width:"90%",justifySelf:"center", alignSelf:"center", backgroundColor: 'rgb(159, 136, 180)', borderRadius: '10px',display: "flex",flexDirection: 'row',}}>            
            
//             <IconButton disableRipple disableFocusRipple style={{backgroundColor: 'transparent', position:"absolute", left:30, top: '50%', marginTop:-20, height:40}}>{ checkBox ? <RiCheckboxBlankLine/>: <RiCheckboxLine/> }</IconButton>
//             <div>
//                 <Typography style={{color:"white"}}> {todo.name}</Typography>
//                 <Typography style={{color:"white"}}> {todo.description}</Typography>
//                 <Typography style={{color:"white"}}>{todo.deadline}</Typography>
//                 <Typography style={{color:"white"}}>{todo.status}</Typography>
//             </div>
//             <IconButton disableRipple disableFocusRipple style={{backgroundColor: 'transparent', top: '50%', marginTop:-20, height:40, position:"absolute", right:30}}><AiFillDelete/></IconButton>
//         </Box>
//     );
// }
// for integrating backend for friends list: https://www.andreasreiterer.at/react-list-component/
function ToDoItem({todo}){
    const [checkBox, setCheckBox] = React.useState(false)
    return(
        <Box style={{justifyContent:"center",marginLeft: "5%",width:"90%",justifySelf:"center", alignSelf:"center", backgroundColor: 'rgb(159, 136, 180)', borderRadius: '10px',display: "flex",flexDirection: 'row',}}>            
            
            <IconButton onClick={()=>{checkBox?setCheckBox(false): setCheckBox(true)}} disableRipple disableFocusRipple style={{backgroundColor: 'transparent', position:"absolute", left:30, top: '50%', marginTop:-20, height:40}}>{ checkBox ? <RiCheckboxLine/>: <RiCheckboxBlankLine/> }</IconButton>
            <div>
                <Typography style={{color:"white"}}> {todo.name}</Typography>
                <Typography style={{color:"white"}}> {todo.description}</Typography>
                <Typography style={{color:"white"}}>{todo.deadline}</Typography>
                <Typography style={{color:"white"}}>{todo.status}</Typography>
            </div>
            <IconButton disableRipple disableFocusRipple style={{backgroundColor: 'transparent', top: '50%', marginTop:-20, height:40, position:"absolute", right:30}}><AiFillDelete/></IconButton>
        </Box>
    )
}


export default ToDoItem;