import { useState } from 'react'

function useToggle(inicial = false) {
  const [valor, setValor] = useState(inicial)
  const alternar = () => setValor(!valor)
  return [valor, alternar]
}

function Eventos() {
  const [mostrarInfo, alternarInfo] = useToggle(false)

  return (
    <div className="w3-card w3-round w3-white w3-center">
      <div className="w3-container">
        <p>Upcoming Events:</p>
        <img src="https://www.w3schools.com/w3images/forest.jpg" alt="Forest" style={{ width: '100%' }} />
        <p><strong>Holiday</strong></p>
        <p>Friday 15:00</p>
        {mostrarInfo && (
          <p className="w3-small w3-left-align">Weekend trip to the forest with friends. Meeting point: main square.</p>
        )}
        <p><button className="w3-button w3-block w3-theme-l4" onClick={alternarInfo}>{mostrarInfo ? 'Hide' : 'Info'}</button></p>
      </div>
    </div>
  )
}

export default Eventos
