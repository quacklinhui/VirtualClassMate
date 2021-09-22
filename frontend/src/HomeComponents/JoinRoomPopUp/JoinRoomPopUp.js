import React from 'react';
import './JoinRoomPopUp.css'


//using the library button cannot
function JoinRoomPopUp(props) {
    return (props.trigger)?(
        <div className = "JoinRoomPopUp">
            <div className = "joinRoomPopUp-inner">   
                <button className = "closePopUp" onClick={()=>props.setTrigger(false)}>x</button>
                <h1>Join a Room</h1>
            </div>
        </div>
    ):"";
  }
  
export default JoinRoomPopUp;