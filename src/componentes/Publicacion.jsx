import { useState } from 'react'

// Hooks personalizados
function useToggle(inicial = false) {
  const [valor, setValor] = useState(inicial)
  const alternar = () => setValor(!valor)
  return [valor, alternar]
}

function useLike() {
  const [likes, setLikes] = useState(0)
  const [meGusta, setMeGusta] = useState(false)

  const darLike = () => {
    setLikes(meGusta ? likes - 1 : likes + 1)
    setMeGusta(!meGusta)
  }

  return { likes, meGusta, darLike }
}

function useComentarios() {
  const [comentarios, setComentarios] = useState([])

  const agregarComentario = (texto) => {
    if (texto.trim() !== '') setComentarios([...comentarios, texto])
  }

  return { comentarios, agregarComentario }
}

function Publicacion({ avatar, nombre, tiempo, children }) {
  const { likes, meGusta, darLike } = useLike()
  const { comentarios, agregarComentario } = useComentarios()
  const [mostrarComentarios, alternarComentarios] = useToggle()
  const [nuevoComentario, setNuevoComentario] = useState('')

  const enviarComentario = () => {
    agregarComentario(nuevoComentario)
    setNuevoComentario('')
  }

  return (
    <div className="w3-container w3-card w3-white w3-round w3-margin"><br />
      <img src={avatar} alt="Avatar" className="w3-left w3-circle w3-margin-right" style={{ width: '60px' }} />
      <span className="w3-right w3-opacity">{tiempo}</span>
      <h4>{nombre}</h4><br />
      <hr className="w3-clear" />
      {children}
      <button type="button" className={`w3-button w3-margin-bottom ${meGusta ? 'w3-theme-l1' : 'w3-theme-d1'}`} onClick={darLike}>
        <i className="fa fa-thumbs-up"></i>  Like {likes > 0 && `(${likes})`}
      </button>{' '}
      <button type="button" className="w3-button w3-theme-d2 w3-margin-bottom" onClick={alternarComentarios}>
        <i className="fa fa-comment"></i>  Comment {comentarios.length > 0 && `(${comentarios.length})`}
      </button>

      {mostrarComentarios && (
        <div className="w3-margin-bottom">
          {comentarios.map((comentario, i) => (
            <p key={i} className="w3-light-grey w3-padding w3-round">{comentario}</p>
          ))}
          <input
            type="text"
            className="w3-input w3-border"
            placeholder="Write a comment..."
            value={nuevoComentario}
            onChange={(e) => setNuevoComentario(e.target.value)}
            onKeyDown={(e) => { if (e.key === 'Enter') enviarComentario() }}
          />
        </div>
      )}
    </div>
  )
}

export default Publicacion
