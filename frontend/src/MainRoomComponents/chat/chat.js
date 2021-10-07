import React, { useState } from 'react'
import {Button, Typography, Paper, Box, Container, TextField} from '@material-ui/core'

// to do: integration with chat
function Chat() {
    return (
        <Container style={{width:"25%", backgroundColor: "#D8ABEC60", position: "absolute", right: 20}}>
            <Button>Chat</Button>
            <TextField fullWidth id="chatInput" variant="outlined" size = 'small'  />
        </Container>
    )
}

export default Chat;