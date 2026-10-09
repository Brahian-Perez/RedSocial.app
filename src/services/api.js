export const API_URL = 'http://localhost:3000/api'

// Hace una petición al backend y devuelve el JSON.
// Si el backend responde con error, lanza un Error con el mensaje que mandó.
export async function api(ruta, { metodo = 'GET', datos } = {}) {
  let respuesta
  try {
    respuesta = await fetch(`${API_URL}${ruta}`, {
      method: metodo,
      headers: datos ? { 'Content-Type': 'application/json' } : undefined,
      body: datos ? JSON.stringify(datos) : undefined,
    })
  } catch {
    throw new Error('No se pudo conectar con el servidor')
  }

  let resultado = await respuesta.json().catch(() => ({}))
  if (!respuesta.ok) {
    throw new Error(resultado.msg || resultado.message || resultado.error || `Error ${respuesta.status}`)
  }
  return resultado
}

// Inicia sesión y devuelve los datos del usuario (sin la contraseña).
export async function loginApi(email, contrasena) {
  let resultado = await api('/auth/login', { metodo: 'POST', datos: { email, contrasena } })
  let usuario = resultado.usuario || resultado.user || resultado.data || resultado
  // eslint-disable-next-line no-unused-vars
  let { contrasena: _, ...sinContrasena } = usuario
  if (sinContrasena.id === undefined) {
    console.error('Respuesta del login:', resultado)
    throw new Error('El login no devolvió el id del usuario')
  }
  return sinContrasena
}
