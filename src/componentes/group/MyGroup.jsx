import ButtonsFunction from '../buttonsComponents/ButtonsFunction'

const misGrupos = [
  { id: 1, nombre: 'Diseñadores UI/UX', miembros: '1.2k miembros · 15 publicaciones nuevas', avatar: 'https://www.w3schools.com/w3images/avatar2.png' },
  { id: 2, nombre: 'Desarrollo Web', miembros: '3.4k miembros · 8 publicaciones nuevas', avatar: 'https://www.w3schools.com/w3images/avatar5.png' },
  { id: 3, nombre: 'Fotografía Creativa', miembros: '856 miembros · 3 publicaciones nuevas', avatar: 'https://www.w3schools.com/w3images/avatar6.png' },
]

function MyGroup() {
  return (
    <div className="w3-card w3-round w3-white">
      <div className="w3-container w3-padding-16 w3-theme-d2">
        <h3><i className="fa fa-group"></i> Mis grupos</h3>
      </div>
      <ul className="w3-ul">
        {misGrupos.map((grupo) => (
          <li key={grupo.id} className="w3-padding-16">
            <img src={grupo.avatar} className="w3-left w3-circle w3-margin-right" style={{ width: '50px' }} alt={grupo.nombre} />
            <span className="w3-large">{grupo.nombre}</span><br />
            <span className="w3-opacity">{grupo.miembros}</span>
            <ButtonsFunction name="Ver grupo" action={() => alert(`Ver grupo: ${grupo.nombre}`)} extraClass="w3-small w3-right" />
          </li>
        ))}
      </ul>
      <div className="w3-container w3-padding-16">
        <ButtonsFunction name="Crear nuevo grupo" icono="fa fa-plus" color="w3-theme-l1" action={() => alert('Crear nuevo grupo')} extraClass="w3-block" />
      </div>
    </div>
  )
}

export default MyGroup
