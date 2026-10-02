import React from 'react'
import ButtonsFunction from '../buttonsComponents/ButtonsFunction'
import Message from './Message'

function ChatWindow() {
  return (
    <>
      <div className="w3-col m8">
        <div className="w3-card w3-round w3-white">
          <div className="w3-container w3-padding-16 w3-theme-d2 w3-round-large">
            <h4><img src="https://www.w3schools.com/w3images/avatar5.png" className="w3-circle" style={{ width: '40px', verticalAlign: 'middle' }} /> Jane Doe <span className="w3-opacity w3-medium"> · Activa ahora</span></h4>
          </div>
          <div className="w3-container w3-padding-16" style={{ height: '400px', overflowY: 'scroll' }}>

            <Message css="w3-panel w3-leftbar w3-border-blue w3-theme-l5 w3-round-large" sender="Jane Doe" time="10:28" text="¡Hola! ¿Cómo va el diseño?" />
            <Message css="w3-panel w3-rightbar w3-border-green w3-theme-l4 w3-round-large w3-right" sender="Tú" time="10:30" text="Muy bien, casi terminado. ¿Te gustó la última versión?" />
            <Message css="w3-panel w3-leftbar w3-border-blue w3-theme-l5 w3-round-large margin-top" sender="Jane Doe" time="10:32" text="Sí, me gustó mucho. ¿Cuándo lo puedes enviar?" />

          </div>
          <div className="w3-container w3-padding-16 w3-border-top">
            <div className="w3-row">
              <div className="w3-col s9">
                <input className="w3-input w3-border w3-round" type="text" placeholder="Escribe un mensaje..." />
              </div>
              <div className="w3-col s3">
                <div id='test' className="w3-justify w3-right">
                  <ButtonsFunction name="Enviar" icono="fa fa-paper-plane" action={() => { alert('Mensaje enviado') }} />

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