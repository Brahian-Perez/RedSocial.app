import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import AuthLayout from "../layouts/AuthLayout";
import AuthCard from "../componentes/auth/AuthCard";
import RegisterForm from "../componentes/auth/RegisterForm";

function RegisterPage() {
  const { iniciarSesion } = useAuth();
  const navigate = useNavigate();

  const handleRegister = (usuario) => {
    iniciarSesion(usuario);
    navigate("/home");
  };

  return (
    <AuthLayout>
      <AuthCard titulo="Crear cuenta">
        <RegisterForm onRegister={handleRegister} />
      </AuthCard>
    </AuthLayout>
  );
}

export default RegisterPage;
