import { useState } from 'react'
import { useApi } from '../hooks/useApi'
import MyGroup from '../componentes/group/MyGroup'
import RecomendedGroup from '../componentes/group/RecomendedGroup'
import GroupSearch from '../componentes/group/GroupSearch'

function GroupPage() {
  const { datos: grupos, cargando, error } = useApi('/grupos')
  const [busqueda, setBusqueda] = useState('')

  const filtrados = (grupos || []).filter((grupo) =>
    (grupo.nombre || '').toLowerCase().includes(busqueda.toLowerCase())
  )

  return (
    <>
      <div className="w3-container w3-content" style={{ maxWidth: '1200px', marginTop: '80px' }}>
        <div className="w3-row-padding">
          <div className="w3-col m6">
            <MyGroup />
          </div>
          <div className="w3-col m6">
            <GroupSearch busqueda={busqueda} onBuscar={setBusqueda} />
            <br />
            <RecomendedGroup grupos={filtrados} cargando={cargando} error={error} />
          </div>
        </div>
      </div>
      <br />
    </>
  )
}

export default GroupPage
