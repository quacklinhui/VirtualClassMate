import React from "react";
import { Grid,CircularProgress } from "@material-ui/core";

import { useSelector } from "react-redux";
import ToDoItem from "./todoitem/todoitem.js";




const ToDoLists = () => {
    const todolists = useSelector((state) => state.toDoList);
    //const classes = useStyles();
    console.log(todolists);
    
    return (
        !todolists.length ? <CircularProgress/>: (
            <Grid container alightItems="stretch" spacing={3} >
                {todolists.map((todo)=>(
                    <Grid key={todo._id} item xs={12} sm={6}>
                        <ToDoItem todo={todo} />
                    </Grid>
                ))}
            </Grid>
        )
    );
}

export default ToDoLists;