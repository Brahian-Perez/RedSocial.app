import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import AuthCard from "../componentes/auth/AuthCard";
import RegisterForm from "../componentes/auth/RegisterForm";

function RegisterPage() {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = ({ nombre, email, password }) => {
    if (nombre && email && password) {
      setError("");
      navigate("/home");
    } else {
      setError("Completa los campos obligatorios.");
    }
  };

  return (
    <AuthLayout>
      <AuthCard titulo="Crear cuenta">
        {error && <p className="w3-text-red w3-center">{error}</p>}
        <RegisterForm onRegister={handleRegister} />
      </AuthCard>
    </AuthLayout>
  );
}

export default RegisterPage;
