import React from "react";
import {Card,Paper,CardActions,CardContent,CardMedia,Button,Typography } from '@material-ui/core';

const ToDoItem = ({todo}) => {
    return (
        <Button style={{width:"90%", alignSelf:"center", backgroundColor: 'rgb(159, 136, 180)', borderRadius: '10px'}}>
            <div>
                <Typography>TEST</Typography>
                <Typography variant="body2">{todo.name}</Typography>
                <Typography variant="body2">{todo.description}</Typography>
                <Typography variant="body2">{todo.deadline}</Typography>
                <Typography variant="body2">{todo.status}</Typography>
            </div>
        </Button>
    );
}

export default ToDoItem;