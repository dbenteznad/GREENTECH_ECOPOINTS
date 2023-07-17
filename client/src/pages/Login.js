import React, { useState } from "react";
import Login from "../components/Login";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    try {
      // Aquí iría tu lógica de inicio de sesión, por ejemplo, llamando a tu API
      console.log("Inicio de sesión exitoso");
    } catch (error) {
      setError("Error al iniciar sesión. Verifica tu correo electrónico y contraseña.");
    }
  };

  return (
    <Login
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      error={error}
      handleLogin={handleLogin}
    />
  );
}

export default LoginPage;
