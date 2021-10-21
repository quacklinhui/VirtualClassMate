import './NavBar.css';
import CreateRoomPopUp from '../CreateRoomPopUp/CreateRoomPopUp';
import JoinRoomPopUp from '../JoinRoomPopUp/JoinRoomPopUp';
import {useState} from 'react';
import {Button} from '@material-ui/core';
import {useHistory} from 'react-router-dom';

function Buttons(props){
    const [createPopUp, setCreatePopUp] = useState(false); //set the default state to false
    const [createJoinRoomPopUp, setJoinRoomCreatePopUp] = useState(false); 

    // function to open Join Room PopUp
    const toggleJoinRoomPopUp = () => {
        setJoinRoomCreatePopUp(!createJoinRoomPopUp)
    }

    // function to open Create Room PopUp
    const toggleCreateRoomPopUp = () => {
        setCreatePopUp(!createPopUp)
    }
    let history = useHistory();
    return (
        <>
            
            <ul className = "nav-buttons" style = {{marginRight: '30px'}}>
                <Button variant="contained" style = {{backgroundColor: '#555555', color: '#fff', marginRight: '20px'}}
                    onClick={() => {history.push({
                    pathname: "/login",
                    state: { id: "", username: "", avatar: "", name: ""}})}}>
                    Logout
                </Button>
                <Button variant="contained" style = {{backgroundColor: '#ff3632', color: '#fff'}} className = "navbar-button-red" onClick={toggleCreateRoomPopUp}>Create Room</Button>
                <Button variant="contained" style = {{backgroundColor: '#689f38', color: '#fff', marginLeft: '20px'}} className = "navbar-button-green" onClick={toggleJoinRoomPopUp}>Join a Room</Button>
            </ul>
            {createPopUp && <CreateRoomPopUp userId = {props.userId} handleClose = {toggleCreateRoomPopUp}></CreateRoomPopUp>}
            {createJoinRoomPopUp && <JoinRoomPopUp userId = {props.userId} handleClose = {toggleJoinRoomPopUp}></JoinRoomPopUp>}
        </>
    )
}

export default Buttons;