import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { useApi } from '../hooks/useApi'
import { api } from '../services/api'
import { tiempoRelativo } from '../utils/fechas'

// Hooks personalizados
function useToggle(inicial = false) {
  const [valor, setValor] = useState(inicial)
  const alternar = () => setValor(!valor)
  return [valor, alternar]
}

function useLike(publicacionId, likesIniciales, usuarioId) {
  const [likes, setLikes] = useState(likesIniciales)
  const [error, setError] = useState('')

  const darLike = async () => {
    setError('')
    try {
      await api(`/publicaciones/${publicacionId}/like`, { metodo: 'POST', datos: { usuario_id: usuarioId } })
    } catch (e) {
      setError(e.message)
    }
    try {
      const resultado = await api(`/publicaciones/${publicacionId}/likes`)
      setLikes(resultado.total_likes)
    } catch {
      // si falla, se deja el número anterior
    }
  }

  return { likes, darLike, errorLike: error }
}

function useComentarios(publicacionId, abiertos, usuarioId) {
  const { datos, cargando, error, recargar } = useApi(abiertos ? `/publicaciones/${publicacionId}/comentarios` : null)

  const agregarComentario = async (contenido) => {
    if (contenido.trim() === '') return
    await api(`/publicaciones/${publicacionId}/comentarios`, {
      metodo: 'POST',
      datos: { usuario_id: usuarioId, contenido: contenido.trim() }
    })
    recargar()
  }

  return { comentarios: datos, cargandoComentarios: cargando, errorComentarios: error, agregarComentario }
}

function Publicacion({ publicacion }) {
  const { usuario } = useAuth()
  const [mostrarComentarios, alternarComentarios] = useToggle()
  const { likes, darLike, errorLike } = useLike(publicacion.id, publicacion.total_likes, usuario.id)
  const { comentarios, cargandoComentarios, errorComentarios, agregarComentario } = useComentarios(publicacion.id, mostrarComentarios, usuario.id)
  const [nuevoComentario, setNuevoComentario] = useState('')
  const [errorEnvio, setErrorEnvio] = useState('')

  const totalComentarios = comentarios ? comentarios.length : publicacion.total_comentarios

  const enviarComentario = async () => {
    setErrorEnvio('')
    try {
      await agregarComentario(nuevoComentario)
      setNuevoComentario('')
    } catch (e) {
      setErrorEnvio(e.message)
    }
  }

  return (
    <div className="w3-container w3-card w3-white w3-round w3-margin"><br />
      <img src={publicacion.avatar || 'https://www.w3schools.com/w3images/avatar2.png'} alt="Avatar" className="w3-left w3-circle w3-margin-right" style={{ width: '60px' }} />
      <span className="w3-right w3-opacity">{tiempoRelativo(publicacion.fecha_creacion)}</span>
      <h4>{publicacion.autor}</h4><br />
      <hr className="w3-clear" />
      <p>{publicacion.texto}</p>
      {publicacion.imagen_url && (
        <img src={publicacion.imagen_url} style={{ width: '100%' }} alt="Imagen de la publicación" className="w3-margin-bottom" />
      )}
      <button type="button" className="w3-button w3-margin-bottom w3-theme-d1" onClick={darLike}>
        <i className="fa fa-thumbs-up"></i>  Me gusta {likes > 0 && `(${likes})`}
      </button>{' '}
      <button type="button" className="w3-button w3-theme-d2 w3-margin-bottom" onClick={alternarComentarios}>
        <i className="fa fa-comment"></i>  Comentar {totalComentarios > 0 && `(${totalComentarios})`}
      </button>
      {errorLike && <p className="w3-text-red">{errorLike}</p>}

      {mostrarComentarios && (
        <div className="w3-margin-bottom">
          {cargandoComentarios && <p className="w3-opacity">Cargando comentarios...</p>}
          {errorComentarios && <p className="w3-text-red">{errorComentarios}</p>}
          {comentarios?.map((comentario) => (
            <p key={comentario.id} className="w3-light-grey w3-padding w3-round">
              <strong>{comentario.autor}</strong> <span className="w3-opacity w3-small">{tiempoRelativo(comentario.fecha_comentario)}</span><br />
              {comentario.contenido}
            </p>
          ))}
          <input
            type="text"
            className="w3-input w3-border"
            placeholder="Escribe un comentario y pulsa Enter..."
            value={nuevoComentario}
            onChange={(e) => setNuevoComentario(e.target.value)}
            onKeyDown={(e) => { if (e.key === 'Enter') enviarComentario() }}
          />
          {errorEnvio && <p className="w3-text-red">{errorEnvio}</p>}
        </div>
      )}
    </div>
  )
}

export default Publicacion
