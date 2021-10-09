import React from 'react';
import { Link } from 'react-router-dom';
import avatar from './../../images/VirtualClassMate_FullLogo.png';
import './GroupProfile.css';

function Members() {

    // to dynamically change the colour of online status when retrieved from db
    function getColor() {
        if (document.getElementById('status').matches('Online')) {
            document.getElementById('status').classList.toggle('status-on');
        }
        else if (document.getElementById('status').matches('Offline')){
            document.getElementById('status').classList.toggle('status-off');
        }
      };

    // need to retrieve list of members in room - loop and create <p>
    return (
        <div id="members" className = "members_container">
            <p>
                <img className = "member_avatar" src={avatar} alt="avatar"></img>
                <div>grace</div> 
                <div>online</div>
            </p>
            <p>
                ama
            </p>
            <p>
                feiyan
            </p>
        </div>
    )
}

export default Members;