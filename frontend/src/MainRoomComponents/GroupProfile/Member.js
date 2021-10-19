import React from 'react';
import './GroupProfile.css'


class Member extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hasMember: props.hasMember,
            memberAvatar: props.memberAvatar,
            memberHat: props.memberHat,
            memberName: props.memberName
        };
    }

    render() {
        const avatar_full = this.state.memberAvatar + this.state.memberHat;
        let avatar = require("../../HomeComponents/AvatarBar/Images/sampleAvatars/" + avatar_full + ".png")
        if (this.state.hasMember === 'true'){
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
                <div>Add your friends to the group!</div>
            )
        }
        
    }
}

export default Member