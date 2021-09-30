import React from "react";
import { Grid,CircularProgress, Paper, List, Button } from "@material-ui/core";

import { useSelector } from "react-redux";
import ToDoItem from "./todoitem/todoitem.js";




const ToDoLists = () => {
    const todolists = useSelector((state) => state.toDoList);
    //const classes = useStyles();
    //console.log(todolists);
    
    return (
        !todolists.length ? <CircularProgress/>: (
            <Grid container alightItems="stretch" style={{maxHeight: 500, backgroundColor: "#E3CDF9", overflow: 'auto'}}>
                {todolists.map((todo)=>(
                    <List key={todo._id} style={{width:"100%", borderRadius:0}}>
                        <ToDoItem todo={todo} />
                    </List>
                ))}
            </Grid>
        )
    );
}

export default ToDoLists;