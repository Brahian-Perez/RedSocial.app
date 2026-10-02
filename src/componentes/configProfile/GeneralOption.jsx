import React from 'react'
import ButtonsFunction from '../buttonsComponents/ButtonsFunction'

function GeneralOption() {

    return (
        <div>
            <div id="General" className="w3-container tab w3-padding-24">
                <h4>Información personal</h4>
                <div className="w3-section">
                    <label>Nombre</label>
                    <input className="w3-input w3-border w3-round" type="text" defaultValue="Juan Pérez" />
                </div>
                <div className="w3-section">
                    <label>Correo electrónico</label>
                    <input className="w3-input w3-border w3-round" type="email" defaultValue="juan@email.com" />
                </div>
                <div className="w3-section">
                    <label>Biografía</label>
                    <textarea className="w3-input w3-border w3-round" rows="3" defaultValue="Diseñador UI/UX. Amante del café."></textarea>
                </div>

                <ButtonsFunction name="Guardar cambios" icono="fa fa-save" action={() => { alert('Button clicked!') }} />
            </div>



        </div>
    )
}

export default GeneralOption