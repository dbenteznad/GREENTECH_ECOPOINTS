import React, { useState } from "react";
import Registro from "../components/Registro";
import { useNavigate } from "react-router-dom";

function RegistroPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navegar = useNavigate();

  const handleClick = () => {
    // Aquí puedes realizar la lógica de registro, por ejemplo, llamando a tu API
    // Una vez que el registro sea exitoso, navegas a la siguiente página
    navegar("/Formulario", { replace: true });
  };

  return (
    <Registro
      setEmail={setEmail}
      setPassword={setPassword}
      handleClick={handleClick}
    />
  );
}

export default RegistroPage;
