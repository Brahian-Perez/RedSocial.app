import CrearPublicacion from './CrearPublicacion'
import Publicacion from './Publicacion'

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'

function ColumnaCentral() {
  return (
    <div className="w3-col m7">
      <CrearPublicacion />

      <Publicacion avatar="https://www.w3schools.com/w3images/avatar2.png" nombre="John Doe" tiempo="1 min">
        <p>{lorem}</p>
        <div className="w3-row-padding" style={{ margin: '0 -16px' }}>
          <div className="w3-half">
            <img src="https://www.w3schools.com/w3images/lights.jpg" style={{ width: '100%' }} alt="Northern Lights" className="w3-margin-bottom" />
          </div>
          <div className="w3-half">
            <img src="https://www.w3schools.com/w3images/nature.jpg" style={{ width: '100%' }} alt="Nature" className="w3-margin-bottom" />
          </div>
        </div>
      </Publicacion>

      <Publicacion avatar="https://www.w3schools.com/w3images/avatar5.png" nombre="Jane Doe" tiempo="16 min">
        <p>{lorem}</p>
      </Publicacion>

      <Publicacion avatar="https://www.w3schools.com/w3images/avatar6.png" nombre="Angie Jane" tiempo="32 min">
        <p>Have you seen this?</p>
        <img src="https://www.w3schools.com/w3images/nature.jpg" style={{ width: '100%' }} className="w3-margin-bottom" />
        <p>{lorem}</p>
      </Publicacion>
    </div>
  )
}

export default ColumnaCentral
