import React from "react";
import Navbar from "./Navbar_WelcomePage";
import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";

function Registro() {

  const [correo_electronico, setEmail] = useState("");
  const [contrasena, setPassWord] = useState("");
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    // Evitar que el formulario actualice toda la página
    e.preventDefault();

    // Establecer la configuración de la solicitud al backend
    const configuration = {
      method: "post",
      url: "http://localhost:5000/api/v1/usuarios/register",
      data: {
        correo_electronico,
        contrasena,
      },
    };

    // Realizar la llamada a la API usando axios
    axios(configuration)
      .then((result) => {
        setRegister(true);
        // Redirige al usuario a la página principal del usuario
        window.location.href = "/registro-formulario";
      })
      .catch((error) => {
        error = new Error();
      });
  }

  return (
    <div>
      <form
        className="rounded-lg bg-green-500 py-10 px-5 mb-10 w-1/2 items-center mt-10 mx-auto"
        onSubmit={handleSubmit}
      >
        <h1 className="text-center text-5xl mb-10 font-bold">¡Regístrate y únete al nuevo reciclaje!</h1>

        <div id="Registro" className="">
          <label className="block text-black uppercase font-bold">
            Correo Electronico
          </label>
          <input
            id="Correo_electonico"
            type="email"
            name="correo_electronico"
              value={correo_electronico}
              onChange={e => setEmail(e.target.value)}
            className="mb-5 border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Correo Electronico"
          />
        </div>

        <div className="">
          <label className="block text-black uppercase font-bold">Contraseña</label>
          <input
            id="Password"
            type="password"
            name="contrasena"
              value={contrasena}
              onChange={e => setPassWord(e.target.value)}
            className="mb-5 border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Contraseña"
          />
        </div>

        <button
            variant="primay"
            type="submit"
            className="py-2 px-2 bg-emerald-800 w-full p-3 text-white uppercase font-bold rounded-md hover:scale-105 cursor-pointer"
            onClick={(e) => handleSubmit(e)}
          >
            ¡Regístrate!
          </button>

      </form>
    </div>
  );
}

export default Registro;
