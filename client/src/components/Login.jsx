import React from "react";
import Navbar from "./Navbar";

function Login({ email, setEmail, password, setPassword }) {
  return (
    <div>
      <div className="py-10 px-5 mb-10 w-1/2 items-center mt-10  mx-auto rounded-lg bg-green-500 ">
        <h1 className="text-center text-5xl mb-10 font-mono">Bienvenido de Nuevo</h1>

        <div id="Registro" className="">
          <label className="block text-white uppercase font-bold ">
            Correo Electronico
          </label>
          <input
            id="correo_electronico"
            type="email"
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
            className="mb-5 border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Correo Electronico"
          />
        </div>

        <div className="">
          <label className="block text-white uppercase font-bold">Contraseña</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
            className="mb-5 border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Contraseña"
          />
        </div>

        <input
          type="submit"
          className="py-2 px-2 bg-green-700 w-full p-3 text-white uppercase font-bold rounded-md hover:scale-105 cursor-pointer"
        />
      </div>
    </div>
  );
}

export default Login;

