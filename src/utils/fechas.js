// "Hace 5 min", "Hace 2 h", "Hace 3 días" o la fecha si es más antigua
export function tiempoRelativo(fecha) {
  if (!fecha) return ''
  let segundos = Math.floor((Date.now() - new Date(fecha).getTime()) / 1000)
  if (segundos < 60) return 'Justo ahora'
  let minutos = Math.floor(segundos / 60)
  if (minutos < 60) return `Hace ${minutos} min`
  let horas = Math.floor(minutos / 60)
  if (horas < 24) return `Hace ${horas} h`
  let dias = Math.floor(horas / 24)
  if (dias < 7) return `Hace ${dias} ${dias === 1 ? 'día' : 'días'}`
  return formatearFecha(fecha)
}

// "15 de mayo de 2000"
export function formatearFecha(fecha) {
  if (!fecha) return ''
  return new Date(fecha).toLocaleDateString('es-CO', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' })
}

// "10:32"
export function formatearHora(fecha) {
  if (!fecha) return ''
  return new Date(fecha).toLocaleTimeString('es-CO', { hour: '2-digit', minute: '2-digit' })
}
