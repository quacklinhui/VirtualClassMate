import React from 'react';
import './InviteFriendsPopUp.css'


function InviteFriendsPopUp(props) {
    return (
        <div className = "InviteFriendPopUp">
            <div className = "popup-inner">   
                <button className = "closePopUp" variant="contained" onClick={props.handleClose}>x</button>
                <h1>Invite Friends</h1>
            </div>
        </div>
    );
  }
  
export default InviteFriendsPopUp;