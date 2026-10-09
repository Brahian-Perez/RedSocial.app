import { useAuth } from '../context/AuthContext'
import { useApi } from '../hooks/useApi'
import { api } from '../services/api'
import CrearPublicacion from './CrearPublicacion'
import Publicacion from './Publicacion'

function ColumnaCentral() {
  const { usuario } = useAuth()
  const { datos: publicaciones, cargando, error, recargar } = useApi('/publicaciones')

  const agregarPublicacion = async (texto, imagenUrl) => {
    await api('/publicaciones', {
      metodo: 'POST',
      datos: { usuario_id: usuario.id, texto, imagen_url: imagenUrl || null }
    })
    recargar()
  }

  // Las más recientes primero
  const ordenadas = [...(publicaciones || [])].sort((a, b) => b.id - a.id)

  return (
    <div className="w3-col m7">
      <CrearPublicacion onPublicar={agregarPublicacion} />

      {cargando && <p className="w3-center w3-opacity">Cargando publicaciones...</p>}
      {error && <p className="w3-center w3-text-red">{error}</p>}
      {publicaciones && ordenadas.length === 0 && <p className="w3-center w3-opacity">Todavía no hay publicaciones.</p>}

      {ordenadas.map((publicacion) => (
        <Publicacion key={publicacion.id} publicacion={publicacion} />
      ))}
    </div>
  )
}

export default ColumnaCentral
