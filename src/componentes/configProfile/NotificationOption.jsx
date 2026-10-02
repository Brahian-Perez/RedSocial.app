import React from 'react'
import ButtonsFunction from '../buttonsComponents/ButtonsFunction'

function NotificationOption() {
    return (
        <div>
            <div id="Notificaciones" className="w3-container tab w3-padding-24" style={{ display: 'block' }}>
                <h4>Preferencias de notificaciones</h4>
                <div className="w3-section">
                    <input className="w3-check" type="checkbox" defaultChecked /> <label>Recibir notificaciones por correo</label>
                </div>
                <div className="w3-section">
                    <input className="w3-check" type="checkbox" defaultChecked /> <label>Notificaciones de nuevos mensajes</label>
                </div>
                <div className="w3-section">
                    <input className="w3-check" type="checkbox"  /> <label>Notificaciones de cumpleaños</label>
                </div>
                <div className="w3-section">
                    <input className="w3-check" type="checkbox" defaultChecked /> <label>Notificaciones de grupos</label>
                </div>

                <ButtonsFunction name="Guardar preferencias" icono="fa fa-save" action={() => { alert('Button notification clicked!') }} />

            </div>

        </div>
    )
}

export default NotificationOption