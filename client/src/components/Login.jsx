import React, { useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();

function Login() {
  const [correo_electronico, setEmail] = useState("");
  const [contrasena, setPassWord] = useState("");
  const [login, setLogin] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const configuration = {
      method: "post",
      url: "http://localhost:5000/api/v1/usuarios/login",
      data: {
        correo_electronico,
        contrasena,
      },
    };
    
    axios(configuration)
      .then((result) => {
        // Envia la cookie
        cookies.set("TOKEN", result.data.token, {
          path: "/",
        });
        // Redirige al usuario a la página principal del usuario
        window.location.href = "/Sesion";
      })
      .catch((error) => {
        error = new Error();
      });
  }

  return (
    <div>
      <div className="py-10 px-5 mb-10 w-1/2 items-center mt-10  mx-auto rounded-lg bg-green-500 ">
        <h1 className="text-center text-5xl mb-10 font-mono">Bienvenido de Nuevo</h1>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="block text-white uppercase font-bold">Correo electrónico</label>
            <input
              type="email"
              name="correo_electronico"
              value={correo_electronico}
              onChange={(e) => setEmail(e.target.value)}
              className="mb-5 border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              placeholder="Introduzca su correo electrónico"
            />
          </div>

          <div className="form-group">
            <label className="block text-white uppercase font-bold">Contraseña</label>
            <input
              type="password"
              name="contrasena"
              value={contrasena}
              onChange={(e) => setPassWord(e.target.value)}
              className="mb-5 border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              placeholder="Contraseña"
            />
          </div>

          <button
            variant="primary"
            type="submit"
            onClick={handleSubmit}
            className="py-2 px-2 bg-green-700 w-full p-3 text-white uppercase font-bold rounded-md hover:scale-105 cursor-pointer"
          >
            Iniciar sesión
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;

