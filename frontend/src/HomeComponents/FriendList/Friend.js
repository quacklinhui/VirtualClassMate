import React from 'react';
import {Button} from '@material-ui/core';
import './FriendList.css';
import PersonalForm from '../../MainRoomComponents/todolists/personal/personalToDoForm';
import {useState} from 'react';
import {BrowserRouter as Router,  useHistory, useLocation} from "react-router-dom";
import FriendForm from '../../MainRoomComponents/todolists/friend/friendToDoForm';
const HoverableDiv = React.memo(({ handleMouseOver, handleMouseOut, friendName }) => {
    return (
      <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} >
        <Button variant="contained" style = {{backgroundColor: 'rgb(159, 136, 180)', color: 'white', marginBottom: '10px', height: '45px', fontSize: '15px', width: '100%'}} className="friend">{friendName}</Button>
      </div>
    );
  });
  
const HoverText = React.memo(({ friendId }) => { //change this to display the pop up
    const [currentId, setCurrentId] = useState(null); 
    return (
      <div style={{position:"fixed", right: "15vw", zIndex: 300, backgroundColour: "white"}}>
        <FriendForm currentId={currentId} setCurrentId={setCurrentId} type="user" referenceID={friendId}/>
      </div>
    );
  });


class Friend extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            friendId: props.friendId,
            friendName: props.friendName,
            friendExists: props.friendExists,
            isHovering: false
        }
        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);
    }
    handleMouseOver() {
        this.setState(() => ({
          isHovering: true
        }));
      }
    
    handleMouseOut() {
        this.setState(() => ({
          isHovering: false
        }));
      }

    render() {

        if (this.state.friendExists === 'true') {
            return (
                <div>
                    <HoverableDiv
                    handleMouseOver={this.handleMouseOver}
                    handleMouseOut={this.handleMouseOut}
                    friendName = {this.state.friendName}
                    friendId = {this.state.friendId}
                    >
                    </HoverableDiv>
                    
                    {this.state.isHovering && <HoverText />}
                 </div>
            )
        }
        else if (this.state.friendExists == 'false'){
            return (
                <>
                    <h4 style = {{textAlign: 'center', color: 'lavenderblush', fontSize: '17px', fontWeight: 'bold', marginTop: '25%'}}>Add your friends!</h4>
                </>    
            )
        }
    }
}

export default Friend