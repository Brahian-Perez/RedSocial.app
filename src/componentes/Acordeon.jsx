import { useState } from 'react'

function Acordeon() {
  const [abierto, setAbierto] = useState(null)

  const alternar = (id) => setAbierto(abierto === id ? null : id)
  const claseBoton = (id) => `w3-button w3-block w3-theme-l1 w3-left-align ${abierto === id ? 'w3-theme-d1' : ''}`
  const claseContenido = (id) => `w3-hide w3-container ${abierto === id ? 'w3-show' : ''}`

  return (
    <div className="w3-card w3-round">
      <div className="w3-white">
        <button onClick={() => alternar('Demo1')} className={claseBoton('Demo1')}><i className="fa fa-circle-o-notch fa-fw w3-margin-right"></i> My Groups</button>
        <div id="Demo1" className={claseContenido('Demo1')}>
          <p>Some text..</p>
        </div>
        <button onClick={() => alternar('Demo2')} className={claseBoton('Demo2')}><i className="fa fa-calendar-check-o fa-fw w3-margin-right"></i> My Events</button>
        <div id="Demo2" className={claseContenido('Demo2')}>
          <p>Some other text..</p>
        </div>
        <button onClick={() => alternar('Demo3')} className={claseBoton('Demo3')}><i className="fa fa-users fa-fw w3-margin-right"></i> My Photos</button>
        <div id="Demo3" className={claseContenido('Demo3')}>
          <div className="w3-row-padding">
            <br />
            <div className="w3-half">
              <img src="https://www.w3schools.com/w3images/lights.jpg" style={{ width: '100%' }} className="w3-margin-bottom" />
            </div>
            <div className="w3-half">
              <img src="https://www.w3schools.com/w3images/nature.jpg" style={{ width: '100%' }} className="w3-margin-bottom" />
            </div>
            <div className="w3-half">
              <img src="https://www.w3schools.com/w3images/mountains.jpg" style={{ width: '100%' }} className="w3-margin-bottom" />
            </div>
            <div className="w3-half">
              <img src="https://www.w3schools.com/w3images/forest.jpg" style={{ width: '100%' }} className="w3-margin-bottom" />
            </div>
            <div className="w3-half">
              <img src="https://www.w3schools.com/w3images/nature.jpg" style={{ width: '100%' }} className="w3-margin-bottom" />
            </div>
            <div className="w3-half">
              <img src="https://www.w3schools.com/w3images/snow.jpg" style={{ width: '100%' }} className="w3-margin-bottom" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Acordeon
