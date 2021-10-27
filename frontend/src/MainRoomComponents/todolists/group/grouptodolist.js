import React from "react";
import { Grid,CircularProgress, Paper, List, Button, Typography } from "@material-ui/core";

import { useSelector } from "react-redux";
import GroupToDoItem from "../group/grouptodoitem";

const GroupToDoLists = ({setCurrentGroupId}) => {
    const Grouptodolists = useSelector((state) => state.GroupToDoList);

    return (
        <Grid container alightItems="stretch" style={{height: '36vh', backgroundColor: "#E3CDF9", overflow: 'auto'}}>
           {Grouptodolists.length ? Grouptodolists.map((todo)=>(
                <List key={todo._id} style={{width:"100%", borderRadius:0}}>
                    <GroupToDoItem todo={todo} setCurrentGroupId={setCurrentGroupId}/>
                </List>
            )):
            <Typography style={{textAlign:"center",width:"100%", margin: 20}}>
                Nothing here, add an item to your group to do list!
            </Typography>}
        </Grid>
    );
}

export default GroupToDoLists;