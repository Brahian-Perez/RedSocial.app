import { useState } from 'react'
import { AuthContext } from './AuthContext'

function leerUsuarioGuardado() {
  try {
    return JSON.parse(localStorage.getItem('usuario'))
  } catch {
    return null
  }
}

function AuthProvider({ children }) {
  let [usuario, setUsuario] = useState(leerUsuarioGuardado)

  let iniciarSesion = (datosUsuario) => {
    localStorage.setItem('usuario', JSON.stringify(datosUsuario))
    setUsuario(datosUsuario)
  }

  let cerrarSesion = () => {
    localStorage.removeItem('usuario')
    setUsuario(null)
  }

  return (
    <AuthContext.Provider value={{ usuario, iniciarSesion, cerrarSesion }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
