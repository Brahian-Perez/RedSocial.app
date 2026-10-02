import React from 'react'
import Chat from './Chat'

function ChatSearch() {
  return (
    <div>
        <div className="w3-container w3-padding-16 w3-theme-d2">
          <h4><i className="fa fa-comments"></i> Conversaciones</h4>
          <div className="w3-section">
            <input className="w3-input w3-border w3-round" type="text" placeholder="Buscar mensajes..."/>
          </div>
        </div>
    </div>
  )
}

export default ChatSearch