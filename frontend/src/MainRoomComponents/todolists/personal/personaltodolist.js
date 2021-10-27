import React from "react";
import { Grid,CircularProgress, Paper, List, Button, Typography } from "@material-ui/core";

import { useSelector } from "react-redux";
import PersonalToDoItem from "./personaltodoitem.js";
import {useState, useEffect} from 'react';

const PersonalToDoLists = ({setCurrentId}) => {
    const Personaltodolists = useSelector((state) => state.PersonalToDoList);

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
      <Grid container alightItems="stretch" style={{height: '36vh', backgroundColor: "#E3CDF9", overflow: 'auto'}}>
        {Personaltodolists.length? Personaltodolists.map((todo)=>(
          <List key={todo._id} style={{width:"100%", borderRadius:0}}>
            <PersonalToDoItem todo={todo} setCurrentId={setCurrentId}/>
          </List>
        )): 
        <Typography style={{textAlign:"center",width:"100%", margin: 20}}>
          Nothing here, add an item to your to do list!
        </Typography>}
      </Grid>
    );
}

export default PersonalToDoLists;