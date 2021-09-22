import './NavBar.css';
import CreateRoomPopUp from '../CreateRoomPopUp/CreateRoomPopUp';
import {useState} from 'react';
import {Button} from '@material-ui/core'

function Buttons(){
    const [createPopUp, setCreatePopUp] = useState(false); //set the default state to false
    return (
        <>
        <ul className = "nav-buttons" style = {{marginRight: '10px'}}>
            <Button variant="contained" style = {{backgroundColor: '#f00', color: '#fff'}} className = "navbar-button-red" onClick={() => { setCreatePopUp(true)}}><a href = "#">Create Room</a></Button>
            <Button variant="contained" style = {{backgroundColor: '#070', color: '#fff', marginLeft: '10px'}}className = "navbar-button-green"><a href = "#">Join a Room</a></Button>
        </ul>
         <CreateRoomPopUp trigger = {createPopUp} setTrigger = {setCreatePopUp}/>
         </>
    )
}

export default Buttons;