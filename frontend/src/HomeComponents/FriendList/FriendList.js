import React, {Component} from 'react';
import './FriendList.css';

// for integrating backend for friends list: https://www.andreasreiterer.at/react-list-component/
function FriendList(props){
    return(
        <>
            <div style = {{display: 'flex', flexDirection: 'column', marginLeft: '200px'}}>
                <div style = {{width: '300px', fontWeight: 'bold'}}>Your Friends</div>
                <div style = {{backgroundColor: 'rgb(203, 184, 221)', borderRadius: '10px', width: '150%', height: '350px', position: 'relative'}}>
                    <div className = "friends">
                        <span>name - status</span>
                    </div> 
                </div> 
            </div>     
        </>
    )
}

export default FriendList