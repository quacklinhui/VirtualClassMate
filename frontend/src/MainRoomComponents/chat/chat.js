import React, { useState } from 'react'
import {IconButton, Typography, Paper, Box, Container, TextField} from '@material-ui/core'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';

// to do: integration with chat
function ChatButton() {
    
    return (
            <IconButton style={{width:"3vw", height: "3vw", borderRadius: 100, backgroundColor: "#D8ABEC60", position: "absolute", right: "2vw", bottom: "2vw", textAlign:"center"}}>
                <ChatBubbleOutlineIcon/>
            </IconButton>
    )
}

export default ChatButton;