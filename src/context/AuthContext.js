import { createContext, useContext } from 'react'

export const AuthContext = createContext(null)

// Devuelve { usuario, iniciarSesion, cerrarSesion }
export function useAuth() {
  return useContext(AuthContext)
}
