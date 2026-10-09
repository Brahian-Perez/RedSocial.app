import ButtonsFunction from '../buttonsComponents/ButtonsFunction'

function RecomendedGroup({ grupos, cargando, error }) {
  return (
    <div className="w3-card w3-round w3-white">
      <div className="w3-container w3-padding-16 w3-theme-d1">
        <h3><i className="fa fa-star"></i> Grupos disponibles</h3>
      </div>
      {cargando && <p className="w3-container w3-opacity">Cargando grupos...</p>}
      {error && <p className="w3-container w3-text-red">{error}</p>}
      {!cargando && !error && grupos.length === 0 && <p className="w3-container w3-opacity">No se encontraron grupos.</p>}
      <ul className="w3-ul">
        {grupos.map((grupo) => (
          <li key={grupo.id} className="w3-padding-16">
            <img src={grupo.imagen || grupo.imagen_url || 'https://www.w3schools.com/w3images/forest.jpg'} className="w3-left w3-circle w3-margin-right" style={{ width: '50px', height: '50px', objectFit: 'cover' }} alt={grupo.nombre} />
            <span className="w3-large">{grupo.nombre}</span><br />
            <span className="w3-opacity">
              {grupo.total_miembros !== undefined ? `${grupo.total_miembros} miembros` : grupo.descripcion}
            </span>
            <ButtonsFunction name="Unirse" icono="fa fa-plus" color="w3-green" action={() => alert(`Unirse a: ${grupo.nombre}`)} extraClass="w3-small w3-right" />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RecomendedGroup
