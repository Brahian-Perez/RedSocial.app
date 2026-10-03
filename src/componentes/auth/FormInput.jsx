function FormInput({label,icono, type="text", name, value, onChange, placeholder}){
    return(
             <div className="w3-section">
      <label htmlFor={name}>
        <i className={`fa ${icono}`}></i> {label}
      </label>
      <input
        id={name}
        name={name}
        className="w3-input w3-border w3-round"
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
        />
        </div>
    );
}
export default FormInput;