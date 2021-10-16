import React, { useState, useEffect } from 'react';
import "./chatMessage.css";

export default function ChatMessage({own}) {



    return (
        <div className={own ? "message own" : "message"}>
            <div className="messageTop">
                <div className="userName">Tom</div>
                <p className="messageText">Hello how are ysdgrsdgregr hertherwergervy retybtby etrb rtb hrtybv45 5uh 5e 56e6ub 56bu56yt u56 u5 6u56ub 56jt you?</p>
            </div>
            <div className="messageBottom">
                1 hour ago
            </div>
        </div>
    );
}