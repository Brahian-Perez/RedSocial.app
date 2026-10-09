function GroupSearch({ busqueda, onBuscar }) {
  return (
    <div className="w3-card w3-round w3-white">
      <div className="w3-container w3-padding-16">
        <h4>Buscar grupos</h4>
        <input
          className="w3-input w3-border w3-round"
          type="text"
          placeholder="Nombre del grupo..."
          value={busqueda}
          onChange={(e) => onBuscar(e.target.value)}
        />
      </div>
    </div>
  )
}

export default GroupSearch
