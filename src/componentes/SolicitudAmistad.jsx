import { useState } from 'react'

function SolicitudAmistad() {
  // 'pendiente' | 'aceptada' | 'rechazada'
  const [estado, setEstado] = useState('pendiente')

  return (
    <div className="w3-card w3-round w3-white w3-center">
      <div className="w3-container">
        <p>Friend Request</p>
        <img src="https://www.w3schools.com/w3images/avatar6.png" alt="Avatar" style={{ width: '50%' }} /><br />
        <span>Jane Doe</span>
        {estado === 'pendiente' && (
          <div className="w3-row w3-opacity">
            <div className="w3-half">
              <button className="w3-button w3-block w3-green w3-section" title="Accept" onClick={() => setEstado('aceptada')}><i className="fa fa-check"></i></button>
            </div>
            <div className="w3-half">
              <button className="w3-button w3-block w3-red w3-section" title="Decline" onClick={() => setEstado('rechazada')}><i className="fa fa-remove"></i></button>
            </div>
          </div>
        )}
        {estado === 'aceptada' && <p className="w3-text-green">Request accepted</p>}
        {estado === 'rechazada' && <p className="w3-text-red">Request declined</p>}
      </div>
    </div>
  )
}

export default SolicitudAmistad
