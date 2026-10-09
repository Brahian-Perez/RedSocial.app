import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import AuthLayout from "../layouts/AuthLayout";
import AuthCard from "../componentes/auth/AuthCard";
import LoginForm from "../componentes/auth/LoginForm";

function LoginPage() {
  const { iniciarSesion } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (usuario) => {
    iniciarSesion(usuario);
    navigate("/home");
  };

  return (
    <AuthLayout>
      <AuthCard titulo="Iniciar sesión">
        <LoginForm onLogin={handleLogin} />
      </AuthCard>
    </AuthLayout>
  );
}

export default LoginPage;
