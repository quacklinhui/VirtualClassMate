import React, { useState, useEffect } from 'react';
import "./chatMessage.css";

export default function ChatMessage({message, own}) {

    const datetime = (new Date(message.createdAt)).toLocaleString();

    return (
        <div className={own ? "message own" : "message"}>
            <div className="messageTop">
                <div className="userName">{message.username}</div>
                <p className="messageText">{message.message}</p>
            </div>
            <div className="messageBottom">
                {datetime}
            </div>
        </div>
    );
}