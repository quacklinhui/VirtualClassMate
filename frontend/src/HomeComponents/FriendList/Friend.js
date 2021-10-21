import React from 'react';
import {Button} from '@material-ui/core';
import './FriendList.css';

class Friend extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            friendId: props.friendId,
            friendName: props.friendName,
            friendExists: props.friendExists,
        }
    }

    render() {
        if (this.state.friendExists === 'true') {
            return (
                <>
                    <Button variant="contained" style = {{backgroundColor: 'rgb(159, 136, 180)', color: 'white', marginBottom: '10px', height: '45px', fontSize: '15px', width: '100%'}} className="friend">{this.state.friendName}</Button>
                </>    
            )
        }
        else {
            return (
                <>
                    <h4 style = {{textAlign: 'center', color: 'lavenderblush'}}>You have no friends</h4>
                </>
            )
        }
    }
}

export default Friend