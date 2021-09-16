import './NavBar.css';
import CreateRoomPopUp from '../CreateRoomPopUp/CreateRoomPopUp';
import {useState} from 'react';
import {Button} from '@material-ui/core'

function Buttons(){
    const [createPopUp, setCreatePopUp] = useState(false); //set the default state to false
    return (
        <>
        <ul className = "nav-buttons">
            <button className = "navbar-button-red" onClick={() => { setCreatePopUp(true)}}><a href = "#">Create Room</a></button>
            <button className = "navbar-button-green"><a href = "#">Join a Room</a></button>
        </ul>
         <CreateRoomPopUp trigger = {createPopUp} setTrigger = {setCreatePopUp}/>
         </>
    )
}

export default Buttons;