import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { loginApi } from '../../services/api'

function LoginForm({ onLogin }) {
  let { register, handleSubmit, setError, formState: { errors, isSubmitting } } = useForm();

  let onSubmited = async (data) => {
    try {
      let usuario = await loginApi(data.email, data.contrasena);
      onLogin(usuario);
    } catch (error) {
      setError("root.servidor", { message: error.message });
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmited)} className="w3-container w3-padding-24" noValidate>
      {errors.root?.servidor && <p className="w3-text-red w3-center">{errors.root.servidor.message}</p>}
      <div className="w3-section">
        <label htmlFor="email"><i className="fa fa-envelope"></i> Correo electrónico</label>
        <input id="email" className="w3-input w3-border w3-round" {...register("email", { required: "Este campo es obligatorio" })} type="email" placeholder="tu@email.com" />
        {errors.email && <span className="w3-text-red">{errors.email.message}</span>}
      </div>
      <div className="w3-section">
        <label htmlFor="contrasena"><i className="fa fa-lock"></i> Contraseña</label>
        <input id="contrasena" className="w3-input w3-border w3-round" {...register("contrasena", { required: "Este campo es obligatorio" })} type="password" placeholder="********" />
        {errors.contrasena && <span className="w3-text-red">{errors.contrasena.message}</span>}
      </div>
      <div className="w3-section">
        <button type="submit" disabled={isSubmitting} className="w3-button w3-theme-d2 w3-round w3-block w3-section">
          <i className="fa fa-sign-in"></i> {isSubmitting ? "Ingresando..." : "Acceder"}
        </button>
      </div>
      <p className="w3-center"><a href="#">¿Olvidaste tu contraseña?</a></p>
      <p className="w3-center">¿No tienes cuenta? <Link to="/registro">Regístrate aquí</Link>.</p>
    </form>
  )
}

export default LoginForm
