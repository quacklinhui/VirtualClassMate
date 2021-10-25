import React from "react";
import { Grid,CircularProgress, Paper, List, Button } from "@material-ui/core";

import { useSelector } from "react-redux";
import FriendToDoItem from "./friendtodoitem.js";


const FriendToDoLists = ({setCurrentId}) => {
    const Personaltodolists = useSelector((state) => state.PersonalToDoList);
    //const classes = useStyles();
    //console.log(todolists);
    
    return (
        // !Personaltodolists.length ? <CircularProgress/>: (
            <Grid container  style={{maxHeight: '40vh', backgroundColor: "#DCDCDC", borderRadius:5, overflow: 'auto'}}>
                {Personaltodolists.map((todo)=>(
                    <List key={todo._id} style={{width:"100%", borderRadius:0}}>
                        <FriendToDoItem todo={todo} setCurrentId={setCurrentId}/>
                    </List>
                ))}
            </Grid>
        // )
    );
}

export default FriendToDoLists;