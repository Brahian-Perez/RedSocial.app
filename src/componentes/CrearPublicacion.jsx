import { useState } from 'react'

function CrearPublicacion({ onPublicar }) {
  const [texto, setTexto] = useState('')
  const [imagenUrl, setImagenUrl] = useState('')
  const [enviando, setEnviando] = useState(false)
  const [error, setError] = useState('')

  const publicar = async () => {
    if (texto.trim() === '' || enviando) return
    setEnviando(true)
    setError('')
    try {
      await onPublicar(texto.trim(), imagenUrl.trim())
      setTexto('')
      setImagenUrl('')
    } catch (e) {
      setError(e.message)
    } finally {
      setEnviando(false)
    }
  }

  return (
    <div className="w3-row-padding">
      <div className="w3-col m12">
        <div className="w3-card w3-round w3-white">
          <div className="w3-container w3-padding">
            <h6 className="w3-opacity">¿Qué estás pensando?</h6>
            <input
              type="text"
              className="w3-input w3-border w3-padding w3-margin-bottom"
              placeholder="Escribe tu publicación..."
              value={texto}
              onChange={(e) => setTexto(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter') publicar() }}
            />
            <input
              type="url"
              className="w3-input w3-border w3-padding w3-margin-bottom"
              placeholder="URL de una imagen (opcional)"
              value={imagenUrl}
              onChange={(e) => setImagenUrl(e.target.value)}
            />
            {error && <p className="w3-text-red">{error}</p>}
            <button type="button" className="w3-button w3-theme" onClick={publicar} disabled={texto.trim() === '' || enviando}>
              <i className="fa fa-pencil"></i>  {enviando ? 'Publicando...' : 'Publicar'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CrearPublicacion
