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
            <Grid container alightItems="stretch" >
                {todolists.map((todo)=>(
                    <Button key={todo._id} style={{width:"100%", backgroundColor: "#D8ABEC60", borderRadius:0}}>
                        <ToDoItem todo={todo} />
                    </Button>
                ))}
            </Grid>
        )
    );
}

export default ToDoLists;