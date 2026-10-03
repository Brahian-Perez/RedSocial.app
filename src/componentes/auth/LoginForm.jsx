import { useState } from "react";
import { Link } from "react-router-dom";
import FormInput from "./FormInput";

function LoginForm({ onLogin }) {
  const [datos, setDatos] = useState({ email: "", password: "" });

const handleChange = (e) => {
  setDatos({ ...datos, [e.target.name]: e.target.value });
};

const handleSubmit = (e) => {
  e.preventDefault();
  onLogin(datos);
};

  return (
  <form className="w3-container w3-padding-24" onSubmit={handleSubmit}>
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

    <div className="w3-section">
      <button href="/home"
        type="submit"
        className="w3-button w3-theme-d2 w3-round w3-block w3-section"
      >
        <i className="fa fa-sign-in"></i> Acceder
      </button>
    </div>

    <p className="w3-center">
      <Link to="/recuperar">¿Olvidaste tu contraseña?</Link>
    </p>
    <p className="w3-center">
      ¿No tienes cuenta? <Link to="/registro">Regístrate aquí</Link>.
    </p>
  </form>
);
}

export default LoginForm;
