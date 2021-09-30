import React from "react";
import {Card,Paper,CardActions,CardContent,CardMedia,Button,Typography } from '@material-ui/core';

const ToDoItem = ({todo}) => {
    return (
        <Button style={{width:"90%", alignSelf:"center", backgroundColor: 'rgb(159, 136, 180)', borderRadius: '10px'}}>
            <div>
                <Typography style={{color:"white"}}> {todo.name}</Typography>
                <Typography style={{color:"white"}}> {todo.description}</Typography>
                <Typography style={{color:"white"}}>{todo.deadline}</Typography>
                <Typography style={{color:"white"}}>{todo.status}</Typography>
            </div>
        </Button>
    );
}

export default ToDoItem;