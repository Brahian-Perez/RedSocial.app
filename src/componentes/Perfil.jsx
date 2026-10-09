import { useAuth } from '../context/AuthContext'
import { useApi } from '../hooks/useApi'
import { formatearFecha } from '../utils/fechas'

function Perfil() {
  const { usuario } = useAuth()
  const { datos: perfil, cargando, error } = useApi(`/usuarios/${usuario.id}`)

  return (
    <div className="w3-card w3-round w3-white">
      <div className="w3-container">
        <h4 className="w3-center">Mi perfil</h4>
        {cargando && <p className="w3-center w3-opacity">Cargando...</p>}
        {error && <p className="w3-center w3-text-red">{error}</p>}
        {perfil && (
          <>
            <p className="w3-center"><img src={perfil.avatar || 'https://www.w3schools.com/w3images/avatar3.png'} className="w3-circle" style={{ height: '106px', width: '106px' }} alt="Avatar" /></p>
            <h5 className="w3-center">{perfil.nombre}</h5>
            <hr />
            {perfil.biografia && <p><i className="fa fa-pencil fa-fw w3-margin-right w3-text-theme"></i> {perfil.biografia}</p>}
            {perfil.ciudad && <p><i className="fa fa-home fa-fw w3-margin-right w3-text-theme"></i> {perfil.ciudad}</p>}
            {perfil.fecha_nacimiento && <p><i className="fa fa-birthday-cake fa-fw w3-margin-right w3-text-theme"></i> {formatearFecha(perfil.fecha_nacimiento)}</p>}
          </>
        )}
      </div>
    </div>
  )
}

export default Perfil
