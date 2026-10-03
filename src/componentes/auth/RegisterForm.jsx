import { useState } from "react";
import { Link } from "react-router-dom";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";

function RegisterForm({ onRegister }) {
  const [datos, setDatos] = useState({
    nombre: "",
    email: "",
    password: "",
    fechaNacimiento: "1990-01-01",
    genero: "",
  });

  const handleChange = (e) => {
    setDatos({ ...datos, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(datos);
  };

  return (
    <form className="w3-container w3-padding-24" onSubmit={handleSubmit}>
      <FormInput
        label="Nombre completo"
        icono="fa-user"
        type="text"
        name="nombre"
        value={datos.nombre}
        onChange={handleChange}
        placeholder="Juan Pérez"
      />

      <FormInput
        label="Correo electrónico"
        icono="fa-envelope"
        type="email"
        name="email"
        value={datos.email}
        onChange={handleChange}
        placeholder="tu@email.com"
      />

      <FormInput
        label="Contraseña"
        icono="fa-lock"
        type="password"
        name="password"
        value={datos.password}
        onChange={handleChange}
        placeholder="********"
      />

      <FormInput
        label="Fecha de nacimiento"
        icono="fa-calendar"
        type="date"
        name="fechaNacimiento"
        value={datos.fechaNacimiento}
        onChange={handleChange}
      />

      <FormSelect
        label="Género"
        icono="fa-venus-mars"
        name="genero"
        value={datos.genero}
        onChange={handleChange}
        options={["Hombre", "Mujer", "Otro"]}
      />

      <div className="w3-section">
        <button
          type="submit"
          className="w3-button w3-theme-d2 w3-round w3-block w3-section"
        >
          <i className="fa fa-user-plus"></i> Registrarse
        </button>
      </div>

      <p className="w3-center">
        ¿Ya tienes cuenta? <Link to="/">Inicia sesión</Link>.
      </p>
    </form>
  );
}

export default RegisterForm;
