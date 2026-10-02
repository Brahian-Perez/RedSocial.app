import React from 'react'
import ButtonsFunction from '../buttonsComponents/ButtonsFunction'

function PrivacyOption() {
    return (
        <div>

            <div id="Privacidad" className="w3-container tab w3-padding-24" style={{ display: 'block' }}>
                <h4>Privacidad y seguridad</h4>
                <div className="w3-section">
                    <label>¿Quién puede ver tu perfil?</label>
                    <select className="w3-select w3-border w3-round" defaultValue="Solo amigos">
                        <option>Todos</option>
                        <option>Solo amigos</option>
                        <option>Solo yo</option>
                    </select>
                </div>
                <div className="w3-section">
                    <label>¿Quién puede enviarte solicitudes de amistad?</label>
                    <select className="w3-select w3-border w3-round" defaultValue="Amigos de amigos">
                        <option>Todos</option>
                        <option>Amigos de amigos</option>
                    </select>
                </div>
                <div className="w3-section">
                    <label>Cambiar contraseña</label>
                    <input className="w3-input w3-border w3-round" type="password" placeholder="Nueva contraseña" />
                </div>

                <ButtonsFunction name="Actualizar privacidad" icono="fa fa-save" action={() => { alert('Button privacy clicked!') }} />
            </div>




        </div>
    )
}

export default PrivacyOption