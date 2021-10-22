import React from "react";
import { Grid,CircularProgress, Paper, List, Button } from "@material-ui/core";

import { useSelector } from "react-redux";
import FriendToDoItem from "./friendtodoitem.js";


const FriendToDoLists = ({setCurrentId}) => {
    const Personaltodolists = useSelector((state) => state.PersonalToDoList);
    //const classes = useStyles();
    //console.log(todolists);
    
    return (
        !Personaltodolists.length ? <CircularProgress/>: (
            <Grid container alightItems="stretch" style={{height: '40vh', backgroundColor: "#E3CDF9", overflow: 'auto'}}>
                {Personaltodolists.map((todo)=>(
                    <List key={todo._id} style={{width:"100%", borderRadius:0}}>
                        <FriendToDoItem todo={todo} setCurrentId={setCurrentId}/>
                    </List>
                ))}
            </Grid>
        )
    );
}

export default FriendToDoLists;