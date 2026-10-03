import ButtonsFunction from '../buttonsComponents/ButtonsFunction'

const gruposSugeridos = [
  { id: 1, nombre: 'Viajeros del mundo', miembros: '5.1k miembros', imagen: 'https://www.w3schools.com/w3images/forest.jpg' },
  { id: 2, nombre: 'Tecnología y gadgets', miembros: '8.2k miembros', imagen: 'https://www.w3schools.com/w3images/lights.jpg' },
  { id: 3, nombre: 'Cocina fácil', miembros: '2.7k miembros', imagen: 'https://www.w3schools.com/w3images/nature.jpg' },
]

function RecomendedGroup() {
  return (
    <div className="w3-card w3-round w3-white">
      <div className="w3-container w3-padding-16 w3-theme-d1">
        <h3><i className="fa fa-star"></i> Grupos sugeridos</h3>
      </div>
      <ul className="w3-ul">
        {gruposSugeridos.map((grupo) => (
          <li key={grupo.id} className="w3-padding-16">
            <img src={grupo.imagen} className="w3-left w3-circle w3-margin-right" style={{ width: '50px', height: '50px', objectFit: 'cover' }} alt={grupo.nombre} />
            <span className="w3-large">{grupo.nombre}</span><br />
            <span className="w3-opacity">{grupo.miembros}</span>
            <ButtonsFunction name="Unirse" icono="fa fa-plus" color="w3-green" action={() => alert(`Unirse a: ${grupo.nombre}`)} extraClass="w3-small w3-right" />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RecomendedGroup
