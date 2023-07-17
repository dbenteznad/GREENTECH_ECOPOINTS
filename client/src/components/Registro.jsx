import React from "react";
import Navbar from "./Navbar";

function Registro({ setEmail, setPassword, handleClick }) {
  return (
    <div>
      <form
        onChange={handleClick}
        className="rounded-lg bg-green-500 py-10 px-5 mb-10 w-1/2 items-center mt-10 mx-auto"
      >
        <h1 className="text-center text-5xl mb-10">Registrarse</h1>

        <div id="Registro" className="">
          <label className="block text-white uppercase font-bold">
            Correo Electronico
          </label>
          <input
            id="Correo_electonico"
            type="email"
            onChange={(ev) => setEmail(ev.target.value)}
            className="mb-5 border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Correo Electronico"
          />
        </div>

        <div className="">
          <label className="block text-white uppercase font-bold">Contraseña</label>
          <input
            id="Password"
            type="password"
            onChange={(ev) => setPassword(ev.target.value)}
            className="mb-5 border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Contraseña"
          />
        </div>

        <input
          type="submit"
          onClick={handleClick}
          className="py-2 px-2 bg-green-700 w-full p-3 text-white uppercase font-bold rounded-md hover:scale-105 cursor-pointer"
        />
      </form>
    </div>
  );
}

export default Registro;
