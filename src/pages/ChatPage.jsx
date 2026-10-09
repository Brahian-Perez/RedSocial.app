import { useEffect, useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { api } from '../services/api'
import ChatSearch from '../componentes/chats/ChatSearch'
import Chat from '../componentes/chats/Chat'
import ChatWindow from '../componentes/chats/ChatWindow'

// El backend todavía no tiene una ruta para listar usuarios (GET /api/usuarios),
// así que los contactos se cargan uno por uno con GET /api/usuarios/:id
const CONTACTOS_IDS = [1, 2, 3]

function ChatPage() {
    const { usuario } = useAuth()
    const [contactos, setContactos] = useState([])
    const [seleccionadoId, setSeleccionadoId] = useState(null)
    const [busqueda, setBusqueda] = useState('')

    useEffect(() => {
        let cancelado = false
        const ids = CONTACTOS_IDS.filter((id) => id !== usuario.id)
        Promise.all(ids.map((id) => api(`/usuarios/${id}`).catch(() => null)))
            .then((lista) => { if (!cancelado) setContactos(lista.filter(Boolean)) })
        return () => { cancelado = true }
    }, [usuario.id])

    const filtrados = contactos.filter((contacto) =>
        contacto.nombre.toLowerCase().includes(busqueda.toLowerCase())
    )
    const contactoActivo = contactos.find((c) => c.id === seleccionadoId) || contactos[0]

    return (
        <>
            <div className="w3-container w3-content" style={{ maxWidth: '1200px', marginTop: '80px' }}>
                <div className="w3-row">
                    <div className="w3-col m4">
                        <div className="w3-card w3-round w3-white">
                            <ChatSearch busqueda={busqueda} onBuscar={setBusqueda} />
                            <ul className="w3-ul w3-hoverable">
                                {filtrados.map((contacto) => (
                                    <Chat
                                        key={contacto.id}
                                        avatar={contacto.avatar}
                                        name={contacto.nombre}
                                        message={contacto.ciudad}
                                        activo={contactoActivo?.id === contacto.id}
                                        onClick={() => setSeleccionadoId(contacto.id)}
                                    />
                                ))}
                            </ul>
                        </div>

                    </div>
                    {contactoActivo && <ChatWindow key={contactoActivo.id} contacto={contactoActivo} />}
                </div>
            </div>
        </>
    )
}

export default ChatPage
