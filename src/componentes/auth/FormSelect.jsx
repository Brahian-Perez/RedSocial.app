function FormSelect({ label, icono, name, value, onChange, options = [], placeholder = 'Selecciona' }) {
  return (
    <div className="w3-section">
      <label htmlFor={name}>
        <i className={`fa ${icono}`}></i> {label}
      </label>
      <select
        id={name}
        name={name}
        className="w3-select w3-border w3-round"
        value={value}
        onChange={onChange}
      >
        <option value="" disabled>{placeholder}</option>
        {options.map((opcion) => (
          <option key={opcion} value={opcion}>{opcion}</option>
        ))}
      </select>
    </div>
  );
}
export default FormSelect;
