import React from 'react'
import ChatSearch from '../componentes/chats/ChatSearch'
import Chat from '../componentes/chats/Chat'
import ChatWindow from '../componentes/chats/ChatWindow'

const chats = [
    {
        id: 1,
        avatar: "https://www.w3schools.com/w3images/avatar2.png",
        name: "John Doe",
        message: "¡Claro! Quedó genial.",
        time: "Ayer",
    },
    {
        id: 2,
        avatar: "https://www.w3schools.com/w3images/avatar6.png",
        name: "Jane Smith",
        message: "¡Gracias! Me alegra que te guste.",
        time: "Hoy",
    },
    {
        id: 4,
        avatar: "https://www.w3schools.com/w3images/avatar3.png",
        name: "Ana López",
        message: "¿Nos vemos mañana?",
        time: "Lun",
    },
]

function ChatPage() {
    return (
        <>
            <div className="w3-container w3-content" style={{ maxWidth: '1200px', marginTop: '80px' }}>
                <div className="w3-row">
                    <div className="w3-col m4">
                        <div className="w3-card w3-round w3-white">
                            <ChatSearch />
                            <ul className="w3-ul w3-hoverable">
                                {chats.map((chat) => (
                                    <Chat
                                        key={chat.id}
                                        avatar={chat.avatar}
                                        name={chat.name}
                                        message={chat.message}
                                        time={chat.time}
                                    />
                                ))}
                            </ul>
                        </div>

                    </div>
                    <ChatWindow />
                </div>
            </div>
        </>
    )
}

export default ChatPage