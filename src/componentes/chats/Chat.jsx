import React from 'react'

function Chat( { avatar, name, message, time }) {
    return (
            <li className="w3-padding-16">
                <img src={avatar} className="w3-left w3-circle w3-margin-right" style={{ width: '50px' }} />
                <span className="w3-large">{name}</span><br />
                <span className="w3-opacity">{message}</span>
                <span className="w3-right w3-small w3-text-theme">{time}</span>
            </li>
    )
}

export default Chat