import React from 'react';
import './GroupProfile.css'


class Member extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hasMember: props.hasMember,
            memberAvatar: props.memberAvatar,
            memberName: props.memberName
        };
    }

    render() {
        if (this.state.hasMember === 'true'){
            let avatar = require("../../HomeComponents/AvatarBar/Images/sampleAvatars/" + this.state.memberAvatar + ".png")
            return (
                <div className = 'member'>
                    <img className = 'member_avatar' src = {avatar.default} alt = "avatar"></img>
                    <div>{this.state.memberName}</div>
                    <div>Online status</div>
                </div>
                
            )
        }
        else {
            return (
                <div style = {{marginTop: '6%', fontSize: '20px'}}>Add your friends to the group!</div>
            )
        }
        
    }
}

export default Member