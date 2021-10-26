import React from "react";
import { Grid,CircularProgress, Paper, List, Button, Typography } from "@material-ui/core";
import {useEffect, useState} from 'react';
import { useSelector } from "react-redux";
import FriendToDoItem from "./friendtodoitem.js";


const FriendToDoLists = ({setCurrentId}) => {
    const Personaltodolists = useSelector((state) => state.PersonalToDoList);
    //const classes = useStyles();
    //console.log(todolists);
    const [count, setCount] = useState(0);
    useEffect(() => {
        let counter = count;
        const interval = setInterval(() => {
          if (counter >= Personaltodolists.length) {
            clearInterval(interval);
          } else {
            setCount(count => count + 1);
            counter++; // local variable that this closure will see
          }
        }, 500);
        return () => clearInterval(interval); 
      }, [Personaltodolists]);

    
    return (
        // !Personaltodolists.length ? <CircularProgress/>: (
            <Grid container  style={{maxHeight: '40vh', backgroundColor: "#DCDCDC", borderRadius:5, overflow: 'auto'}}>
                {Personaltodolists.length? Personaltodolists.slice(0, count).map((todo)=>(
                    <List key={todo._id} style={{width:"100%", borderRadius:0}}>
                        <FriendToDoItem todo={todo} setCurrentId={setCurrentId}/>
                    </List>
                )):
                <Typography style ={{textAlign:"center",width:"100%"}}>
                Taking a break!
                </Typography>}
            </Grid>
        // )
    );
}

export default FriendToDoLists;