import { useCallback, useEffect, useState } from 'react'
import { api } from '../services/api'

// Carga datos de una ruta GET del backend.
// Devuelve { datos, cargando, error, recargar }. Si ruta es null no hace nada.
export function useApi(ruta) {
  let [estado, setEstado] = useState({ ruta: null, datos: null, error: null })
  let [version, setVersion] = useState(0)

  useEffect(() => {
    if (!ruta) return
    let cancelado = false
    api(ruta)
      .then((datos) => { if (!cancelado) setEstado({ ruta, datos, error: null }) })
      .catch((error) => { if (!cancelado) setEstado({ ruta, datos: null, error: error.message }) })
    return () => { cancelado = true }
  }, [ruta, version])

  let recargar = useCallback(() => setVersion((v) => v + 1), [])

  if (!ruta) return { datos: null, cargando: false, error: null, recargar }
  if (estado.ruta !== ruta) return { datos: null, cargando: true, error: null, recargar }
  return { datos: estado.datos, cargando: false, error: estado.error, recargar }
}
