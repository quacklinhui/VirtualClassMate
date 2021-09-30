
import React from "react";
import { Grid,CircularProgress, Paper, List, Button } from "@material-ui/core";
import { useSelector } from "react-redux";
import ToDoItem from "../../MainRoomComponents/todolists/todoitem/todoitem";

const RoomButton = () => {
    const todolists = useSelector((state) => state.toDoList);
    //const classes = useStyles();
    //console.log(todolists);
    
    return (
        !todolists.length ? <CircularProgress/>: (
            <Grid container alightItems="stretch" spacing={3} >
                {todolists.map((todo)=>(
                    <Button key={todo._id} item xs={12} sm={12}>
                        <ToDoItem todo={todo} />
                    </Button>
                ))}
            </Grid>
        )
    );
}

export default RoomButton;