import { useEffect, useRef, useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import { useApi } from '../../hooks/useApi'
import { api } from '../../services/api'
import { formatearHora } from '../../utils/fechas'
import ButtonsFunction from '../buttonsComponents/ButtonsFunction'
import Message from './Message'

function ChatWindow({ contacto }) {
  const { usuario } = useAuth()
  const { datos: mensajes, cargando, error, recargar } = useApi(`/mensajes/${usuario.id}/${contacto.id}`)
  const [texto, setTexto] = useState('')
  const [errorEnvio, setErrorEnvio] = useState('')
  const finRef = useRef(null)

  // Revisa si hay mensajes nuevos cada 5 segundos
  useEffect(() => {
    const intervalo = setInterval(recargar, 5000)
    return () => clearInterval(intervalo)
  }, [recargar])

  // Baja al último mensaje cuando llegan mensajes
  useEffect(() => {
    finRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
  }, [mensajes])

  const enviar = async () => {
    if (texto.trim() === '') return
    setErrorEnvio('')
    try {
      await api('/mensajes', {
        metodo: 'POST',
        datos: { remitente_id: usuario.id, destinatario_id: contacto.id, contenido: texto.trim() }
      })
      setTexto('')
      recargar()
    } catch (e) {
      setErrorEnvio(e.message)
    }
  }

  return (
    <>
      <div className="w3-col m8">
        <div className="w3-card w3-round w3-white">
          <div className="w3-container w3-padding-16 w3-theme-d2 w3-round-large">
            <h4><img src={contacto.avatar || 'https://www.w3schools.com/w3images/avatar5.png'} className="w3-circle" style={{ width: '40px', verticalAlign: 'middle' }} /> {contacto.nombre}</h4>
          </div>
          <div className="w3-container w3-padding-16" style={{ height: '400px', overflowY: 'scroll' }}>
            {cargando && <p className="w3-opacity w3-center">Cargando mensajes...</p>}
            {error && <p className="w3-text-red w3-center">{error}</p>}
            {mensajes && mensajes.length === 0 && <p className="w3-opacity w3-center">Todavía no hay mensajes. ¡Escribe el primero!</p>}

            {mensajes?.map((mensaje) => {
              const esMio = mensaje.remitente_id === usuario.id
              return (
                <div key={mensaje.id} className="w3-clear">
                  <Message
                    css={esMio
                      ? 'w3-panel w3-rightbar w3-border-green w3-theme-l4 w3-round-large w3-right'
                      : 'w3-panel w3-leftbar w3-border-blue w3-theme-l5 w3-round-large'}
                    sender={esMio ? 'Tú' : contacto.nombre}
                    time={formatearHora(mensaje.fecha)}
                    text={mensaje.contenido}
                  />
                </div>
              )
            })}
            <div ref={finRef}></div>
          </div>
          <div className="w3-container w3-padding-16 w3-border-top">
            {errorEnvio && <p className="w3-text-red">{errorEnvio}</p>}
            <div className="w3-row">
              <div className="w3-col s9">
                <input
                  className="w3-input w3-border w3-round"
                  type="text"
                  placeholder="Escribe un mensaje..."
                  value={texto}
                  onChange={(e) => setTexto(e.target.value)}
                  onKeyDown={(e) => { if (e.key === 'Enter') enviar() }}
                />
              </div>
              <div className="w3-col s3">
                <div id='test' className="w3-justify w3-right">
                  <ButtonsFunction name="Enviar" icono="fa fa-paper-plane" action={enviar} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ChatWindow
