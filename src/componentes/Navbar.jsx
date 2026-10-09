import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function Navbar() {
  const { usuario, cerrarSesion } = useAuth()
  const navigate = useNavigate()
  const [menuAbierto, setMenuAbierto] = useState(false)

  const salir = () => {
    cerrarSesion()
    navigate('/')
  }
  const [notificaciones, setNotificaciones] = useState([
    { id: 1, texto: 'One new friend request' },
    { id: 2, texto: 'John Doe posted on your wall' },
    { id: 3, texto: 'Jane likes your post' },
  ])

  const marcarLeida = (id) => {
    setNotificaciones(notificaciones.filter((notificacion) => notificacion.id !== id))
  }

  return (
    <>
      {/* Navbar */}
      <div className="w3-top">
        <div className="w3-bar w3-theme-d2 w3-left-align w3-large">
          <a className="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-padding-large w3-hover-white w3-large w3-theme-d2" href="#" onClick={(e) => { e.preventDefault(); setMenuAbierto(!menuAbierto) }}><i className="fa fa-bars"></i></a>
          <Link to="/home" className="w3-bar-item w3-button w3-padding-large w3-theme-d4"><i className="fa fa-home w3-margin-right"></i>Logo</Link>
          <a href="#" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white" title="News"><i className="fa fa-globe"></i></a>
          <Link to="/configuracion" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white" title="Account Settings"><i className="fa fa-user"> </i></Link>
          <Link to="/chat" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white" title="Messages"><i className="fa fa-envelope"></i></Link>
          <Link to="/grupos" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white" title="Groups"><i className="fa fa-users"></i></Link>
          <div className="w3-dropdown-hover w3-hide-small">
            <button className="w3-button w3-padding-large" title="Notifications"><i className="fa fa-bell"></i>{notificaciones.length > 0 && <span className="w3-badge w3-right w3-small w3-green">{notificaciones.length}</span>}</button>
            <div className="w3-dropdown-content w3-card-4 w3-bar-block" style={{ width: '300px' }}>
              {notificaciones.length === 0 && <span className="w3-bar-item w3-opacity">No new notifications</span>}
              {notificaciones.map((notificacion) => (
                <a key={notificacion.id} href="#" className="w3-bar-item w3-button" onClick={(e) => { e.preventDefault(); marcarLeida(notificacion.id) }}>{notificacion.texto}</a>
              ))}
            </div>
          </div>
          <button type="button" onClick={salir} className="w3-bar-item w3-button w3-hide-small w3-right w3-padding-large w3-hover-white" title="Cerrar sesión"><i className="fa fa-sign-out"></i></button>
          <Link to="/configuracion" className="w3-bar-item w3-button w3-hide-small w3-right w3-padding-large w3-hover-white" title={usuario?.nombre}>
            <img src={usuario?.avatar || "https://www.w3schools.com/w3images/avatar2.png"} className="w3-circle" style={{ height: '23px', width: '23px' }} alt="Avatar" />
          </Link>
        </div>
      </div>

      {/* Navbar on small screens */}
      <div id="navDemo" className={`w3-bar-block w3-theme-d2 w3-hide w3-hide-large w3-hide-medium w3-large ${menuAbierto ? 'w3-show' : ''}`}>
        <a href="#" className="w3-bar-item w3-button w3-padding-large">Link 1</a>
        <a href="#" className="w3-bar-item w3-button w3-padding-large">Link 2</a>
        <a href="#" className="w3-bar-item w3-button w3-padding-large">Link 3</a>
        <a href="#" className="w3-bar-item w3-button w3-padding-large">My Profile</a>
      </div>
    </>
  )
}

export default Navbar
