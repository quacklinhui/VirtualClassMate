import React from "react";
import {Card,CardActions,CardContent,CardMedia,Button,Typography } from '@material-ui/core';

const ToDoItem = ({todo}) => {
    return (
        <Card style={{width:"100%"}}>
            <div>
                <Typography>TEST</Typography>
                <Typography variant="body2">{todo.name}</Typography>
                <Typography variant="body2">{todo.description}</Typography>
                <Typography variant="body2">{todo.deadline}</Typography>
                <Typography variant="body2">{todo.status}</Typography>
            </div>
        </Card>
    );
}

export default ToDoItem;