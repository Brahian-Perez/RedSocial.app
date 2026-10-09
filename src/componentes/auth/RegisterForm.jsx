import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { api, loginApi } from "../../services/api";

function RegisterForm({ onRegister }) {
  let { register, handleSubmit, setError, formState: { errors, isSubmitting } } = useForm({
    defaultValues: { fecha_nacimiento: "", genero: "" }
  });

  let onSubmited = async (data) => {
    // eslint-disable-next-line no-unused-vars
    let { confirmar_contrasena, ...usuario } = data;
    try {
      await api('/auth/register', { metodo: 'POST', datos: usuario });
      // Después de registrarse inicia sesión para obtener el id del usuario
      let usuarioLogueado = await loginApi(usuario.email, usuario.contrasena);
      onRegister(usuarioLogueado);
    } catch (error) {
      setError("root.servidor", { message: error.message });
    }
  }

  function confirmPassword(value, valores) {
    return value === valores.contrasena || "Las contraseñas no coinciden";
  }

  function mayorDeEdad(value) {
    let nacimiento = new Date(value);
    let hoy = new Date();
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    let mes = hoy.getMonth() - nacimiento.getMonth();
    if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
      edad--;
    }
    return edad >= 13 || "Debes tener al menos 13 años";
  }

  return (
    <form onSubmit={handleSubmit(onSubmited)} className="w3-container w3-padding-24" noValidate>
      {errors.root?.servidor && <p className="w3-text-red w3-center">{errors.root.servidor.message}</p>}
      <div className="w3-section">
        <label htmlFor="nombre"><i className="fa fa-user"></i> Nombre completo</label>
        <input id="nombre" className="w3-input w3-border w3-round" type="text" placeholder="Juan Pérez"
          {...register("nombre", {
            required: "Este campo es obligatorio",
            minLength: { value: 3, message: "El nombre debe tener al menos 3 caracteres" }
          })} />
        {errors.nombre && <span className="w3-text-red">{errors.nombre.message}</span>}
      </div>
      <div className="w3-section">
        <label htmlFor="email"><i className="fa fa-envelope"></i> Correo electrónico</label>
        <input id="email" className="w3-input w3-border w3-round" type="email" placeholder="tu@email.com"
          {...register("email", {
            required: "Este campo es obligatorio",
            pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Ingresa un correo válido" }
          })} />
        {errors.email && <span className="w3-text-red">{errors.email.message}</span>}
      </div>
      <div className="w3-section">
        <label htmlFor="contrasena"><i className="fa fa-lock"></i> Contraseña</label>
        <input id="contrasena" className="w3-input w3-border w3-round" type="password" placeholder="********"
          {...register("contrasena", {
            required: "Este campo es obligatorio",
            minLength: { value: 8, message: "La contraseña debe tener al menos 8 caracteres" }
          })} />
        {errors.contrasena && <span className="w3-text-red">{errors.contrasena.message}</span>}
      </div>
      <div className="w3-section">
        <label htmlFor="confirmar_contrasena"><i className="fa fa-lock"></i> Confirmar contraseña</label>
        <input id="confirmar_contrasena" className="w3-input w3-border w3-round" type="password" placeholder="********"
          {...register("confirmar_contrasena", { required: "Este campo es obligatorio", validate: confirmPassword })} />
        {errors.confirmar_contrasena && <span className="w3-text-red">{errors.confirmar_contrasena.message}</span>}
      </div>
      <div className="w3-section">
        <label htmlFor="fecha_nacimiento"><i className="fa fa-calendar"></i> Fecha de nacimiento</label>
        <input id="fecha_nacimiento" className="w3-input w3-border w3-round" type="date"
          {...register("fecha_nacimiento", { required: "Este campo es obligatorio", validate: mayorDeEdad })} />
        {errors.fecha_nacimiento && <span className="w3-text-red">{errors.fecha_nacimiento.message}</span>}
      </div>
      <div className="w3-section">
        <label htmlFor="genero"><i className="fa fa-venus-mars"></i> Género</label>
        <select id="genero" className="w3-select w3-border w3-round"
          {...register("genero", { required: "Selecciona una opción" })}>
          <option value="" disabled>Selecciona</option>
          <option value="Hombre">Hombre</option>
          <option value="Mujer">Mujer</option>
          <option value="Otro">Otro</option>
        </select>
        {errors.genero && <span className="w3-text-red">{errors.genero.message}</span>}
      </div>
      <div className="w3-section">
        <button type="submit" disabled={isSubmitting} className="w3-button w3-theme-d2 w3-round w3-block w3-section">
          <i className="fa fa-user-plus"></i> {isSubmitting ? "Registrando..." : "Registrarse"}
        </button>
      </div>
      <p className="w3-center">¿Ya tienes cuenta? <Link to="/">Inicia sesión</Link>.</p>
    </form>
  )
}

export default RegisterForm;
