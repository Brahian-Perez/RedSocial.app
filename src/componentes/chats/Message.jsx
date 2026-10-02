import React from 'react'

function Message({css, sender, time, text }) {
    return (
        <div className={`${css}`} style={{ maxWidth: '80%' }}>
            <p><strong>{sender}</strong> <span className="w3-opacity">{time}</span></p>
            <p>{text}</p>
        </div>
    )
}

export default Message