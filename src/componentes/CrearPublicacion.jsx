import { useState } from 'react'

function CrearPublicacion({ onPublicar }) {
  const [texto, setTexto] = useState('')

  const publicar = () => {
    if (texto.trim() === '') return
    onPublicar(texto.trim())
    setTexto('')
  }

  return (
    <div className="w3-row-padding">
      <div className="w3-col m12">
        <div className="w3-card w3-round w3-white">
          <div className="w3-container w3-padding">
            <h6 className="w3-opacity">Social Media template by w3.css</h6>
            <input
              type="text"
              className="w3-input w3-border w3-padding w3-margin-bottom"
              placeholder="Status: Feeling Blue"
              value={texto}
              onChange={(e) => setTexto(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter') publicar() }}
            />
            <button type="button" className="w3-button w3-theme" onClick={publicar} disabled={texto.trim() === ''}><i className="fa fa-pencil"></i>  Post</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CrearPublicacion
