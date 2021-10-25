import React from "react";
import { Grid,CircularProgress, Paper, List, Button } from "@material-ui/core";

import { useSelector } from "react-redux";
import GroupToDoItem from "../group/grouptodoitem";




const GroupToDoLists = ({setCurrentGroupId}) => {
    const Grouptodolists = useSelector((state) => state.GroupToDoList);
    //const classes = useStyles();
    //console.log(todolists);
    
    return (
        !Grouptodolists.length ? <CircularProgress/>: (
            <Grid container alightItems="stretch" style={{height: '36vh', backgroundColor: "#E3CDF9", overflow: 'auto'}}>
                {Grouptodolists.map((todo)=>(
                    <List key={todo._id} style={{width:"100%", borderRadius:0}}>
                        <GroupToDoItem todo={todo} setCurrentGroupId={setCurrentGroupId}/>
                    </List>
                ))}
            </Grid>
        )
    );
}

export default GroupToDoLists;