import Perfil from './Perfil'
import Acordeon from './Acordeon'
import Intereses from './Intereses'
import Alerta from './Alerta'

function ColumnaIzquierda() {
  return (
    <div className="w3-col m3">
      <Perfil />
      <br />
      <Acordeon />
      <br />
      <Intereses />
      <br />
      <Alerta />
    </div>
  )
}

export default ColumnaIzquierda
