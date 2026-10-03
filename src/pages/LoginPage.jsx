import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import AuthCard from "../componentes/auth/AuthCard";
import LoginForm from "../componentes/auth/LoginForm";

function LoginPage() {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = ({ email, password }) => {
    if (email && password) {
      setError("");
      navigate("/");
    } else {
      setError("Ingresa tu correo y tu contraseña.");
    }
  };

  return (
    <AuthLayout>
      <AuthCard titulo="Iniciar sesión">
        {error && <p className="w3-text-red w3-center">{error}</p>}
        <LoginForm onLogin={handleLogin} />
      </AuthCard>
    </AuthLayout>
  );
}

export default LoginPage;