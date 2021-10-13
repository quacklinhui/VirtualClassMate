import React from 'react';
import {Button, CircularProgress} from '@material-ui/core';
import {useHistory, Link} from 'react-router-dom';

class Friends extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            roomId: props.roomId
        };
    }
    render () {  
        return (
            <div>hello</div>
        )
    }
}

export default Friends;