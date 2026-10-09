import React from 'react'

function Chat( { avatar, name, message, time, activo, onClick }) {
    return (
            <li className={`w3-padding-16 ${activo ? 'w3-theme-l4' : ''}`} style={{ cursor: 'pointer' }} onClick={onClick}>
                <img src={avatar || 'https://www.w3schools.com/w3images/avatar2.png'} className="w3-left w3-circle w3-margin-right" style={{ width: '50px' }} />
                <span className="w3-large">{name}</span><br />
                <span className="w3-opacity">{message}</span>
                {time && <span className="w3-right w3-small w3-text-theme">{time}</span>}
            </li>
    )
}

export default Chat
