import Eventos from './Eventos'
import SolicitudAmistad from './SolicitudAmistad'

function ColumnaDerecha() {
  return (
    <div className="w3-col m2">
      <Eventos />
      <br />
      <SolicitudAmistad />
      <br />
      <div className="w3-card w3-round w3-white w3-padding-16 w3-center">
        <p>ADS</p>
      </div>
      <br />
      <div className="w3-card w3-round w3-white w3-padding-32 w3-center">
        <p><i className="fa fa-bug w3-xxlarge"></i></p>
      </div>
    </div>
  )
}

export default ColumnaDerecha
