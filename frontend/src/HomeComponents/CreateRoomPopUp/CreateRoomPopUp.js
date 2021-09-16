import { DialogContent } from '@material-ui/core';
import React from 'react';
import {Button} from '@material-ui/core'


function CreateRoomPopUp(props) {
    return (props.trigger)?(
        <div className = "createRoomPopUp">
            <div className = "createRoomPopUp-inner">   
                <button className = "closePopUp"></button>
                {props.children}
            </div>
        </div>
    ):"";
  }
  
  export default CreateRoomPopUp;