import React from 'react';
import './GroupProfile.css'

export default function Member({hasMember, key, memberAvatar, memberName, onlineStatus}) {
    console.log("User " + memberName + " " + onlineStatus);
    let avatar = null;

    if (hasMember == 'true'){
        avatar = require("../../HomeComponents/AvatarBar/Images/sampleAvatars/" + memberAvatar + ".png")
    }

    return <div> {(hasMember === 'true') ? 
        <div className = 'member'>
                    <img className = 'member_avatar' src = {avatar.default} alt = "avatar"></img>
                    <div>{memberName}</div>
                    <div style={onlineStatus ? {color: "lightgreen"} : {color: "grey"}}>{(onlineStatus) ? 'Online' : 'Offline' }</div>
                </div>
     : 
        <div style = {{marginTop: '6%', fontSize: '20px'}}>Add your friends to the group!</div>
    }
    </div>
}

// class Member extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             hasMember: props.hasMember,
//             memberAvatar: props.memberAvatar,
//             memberName: props.memberName,
//             onlineStatus: props.onlineStatus
//         };
//         console.log("User " + props.memberName + " " + props.onlineStatus);
//     }

//     render() {
//         if (this.state.hasMember === 'true'){
//             let avatar = require("../../HomeComponents/AvatarBar/Images/sampleAvatars/" + this.state.memberAvatar + ".png")
//             return (
//                 <div className = 'member'>
//                     <img className = 'member_avatar' src = {avatar.default} alt = "avatar"></img>
//                     <div>{this.state.memberName}</div>
//                     <div style={this.state.onlineStatus ? {color: "lightgreen"} : {color: "grey"}}>{(this.state.onlineStatus) ? 'Online' : 'Offline' }</div>
//                 </div>
                
//             )
//         }
//         else {
//             return (
//                 <div style = {{marginTop: '6%', fontSize: '20px'}}>Add your friends to the group!</div>
//             )
//         }
        
//     }
// }

// export default Member

