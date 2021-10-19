import React from 'react';
import { Link } from 'react-router-dom';
import avatar from './../../images/VirtualClassMate_FullLogo.png';
import './GroupProfile.css';

function Members(props) {

    

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