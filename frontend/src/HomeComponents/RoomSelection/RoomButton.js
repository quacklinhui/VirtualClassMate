
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
            <Paper alightItems="stretch" spacing={3} style={{width:"100%", backgroundColor: "#D8ABEC60", borderRadius:10, alightItems:"center",textAlign:"center"}} >
                {todolists.map((todo)=>(
                    <List key={todo._id} style={{width:"100%"}}>
                        <ToDoItem todo={todo} />
                    </List>
                ))}
            </Paper>
        )
    );
}

export default RoomButton;