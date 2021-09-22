import './NavBar.css';
import CreateRoomPopUp from '../CreateRoomPopUp/CreateRoomPopUp';
import JoinRoomPopUp from '../JoinRoomPopUp/JoinRoomPopUp';
import {useState} from 'react';
import {Button} from '@material-ui/core'

function Buttons(){
    const [createPopUp, setCreatePopUp] = useState(false); //set the default state to false
    const [createJoinRoomPopUp, setJoinRoomCreatePopUp] = useState(false); 
    return (
        <>
        <ul className = "nav-buttons" style = {{marginRight: '30px'}}>
            <Button variant="contained" style = {{backgroundColor: '#ff3632', color: '#fff'}} className = "navbar-button-red" onClick={() => { setCreatePopUp(true)}}><a href = "#">Create Room</a></Button>
            <Button variant="contained" style = {{backgroundColor: '#689f38', color: '#fff', marginLeft: '20px'}} className = "navbar-button-green" onClick={() => {setJoinRoomCreatePopUp(true)}}><a href = "#">Join a Room</a></Button>
        </ul>
         <CreateRoomPopUp trigger = {createPopUp} setTrigger = {setCreatePopUp}/>
         <JoinRoomPopUp trigger = {createJoinRoomPopUp} setTrigger = {setJoinRoomCreatePopUp}/>
         </>
    )
}

export default Buttons;