import './NavBar.css';
import CreateRoomPopUp from '../CreateRoomPopUp/CreateRoomPopUp';
import JoinRoomPopUp from '../JoinRoomPopUp/JoinRoomPopUp';
import {useState} from 'react';
import {Button} from '@material-ui/core'
import {useHistory} from "react-router-dom";

function Buttons(){
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

    return (
        <>
            <ul className = "nav-buttons" style = {{marginRight: '30px'}}>
                <Button variant="contained" style = {{backgroundColor: '#ff3632', color: '#fff'}} className = "navbar-button-red" onClick={toggleCreateRoomPopUp}>Create Room</Button>
                <Button variant="contained" style = {{backgroundColor: '#689f38', color: '#fff', marginLeft: '20px'}} className = "navbar-button-green" onClick={toggleJoinRoomPopUp}>Join a Room</Button>
            </ul>
            {createPopUp && <CreateRoomPopUp handleClose = {toggleCreateRoomPopUp}></CreateRoomPopUp>}
            {createJoinRoomPopUp && <JoinRoomPopUp handleClose = {toggleJoinRoomPopUp}></JoinRoomPopUp>}
        </>
    )
}

export default Buttons;