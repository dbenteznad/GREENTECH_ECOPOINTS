import React, { useState, useEffect } from "react";
import Registro from './Registro';
import axios from "axios";
import queryString from 'query-string';
import Cookies from "universal-cookie";
const cookies = new Cookies();



function Formulario(props) {

    const [correo_electronico, setEmail] = useState("");
    const [nombre, setNombre] = useState("");
    const [numero_movil, setMovil] = useState("");
    const [ubicacion, setUbicacion] = useState("");
    const [basura_papel, setBasuraPapel] = useState("");
    const [basura_plastico, setBasuraPlastico] = useState("");
    const [basura_resto, setBasuraResto] = useState("");
    const [basura_organico, setBasuraOrganico] = useState("");
    const [basura_cristal, setBasuraCristal] = useState("");
    const [no_recicla, setNoRecicla] = useState("");
    const [login, setLogin] = useState(false);

    // Obtener el valor de correo_electronico desde los parámetros de la URL usando useEffect
    useEffect(() => {
        const values = queryString.parse(props.location.search);
        const correo_electronico = values.correo_electronico || '';
        // Realiza cualquier otra acción con el correo_electronico si es necesario
    }, [props.location.search]);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Establecer la configuración de la solicitud al backend
        const configuration = {
            method: "put",
            url: `http://localhost:5000/api/v1/usuarios/${correo_electronico}`,
            data: {
                correo_electronico,
                nombre,
                numero_movil,
                ubicacion,
                basura_papel: basura_papel === "si",
                basura_plastico: basura_plastico === "si",
                basura_resto: basura_resto === "si",
                basura_organico: basura_organico === "si",
                basura_cristal: basura_cristal === "si",
                no_recicla: no_recicla === "si",
            },
        };

        // Realizar la llamada a la API usando axios
        axios(configuration)
        .then((result) => {
          setLogin(true);
          // Envia la cookie
          cookies.set("TOKEN", result.data.token, {
            path: "/",
          });
          // Redirige al usuario a la página principal del usuario
          window.location.href = "/home";
        })
        .catch((error) => {
          error = new Error();
        });
    }



    return (
        <>
            <h1 className="mt-5 text-center text-5xl mb-10" >¡Rellene los siguientes campos!</h1>
            <form
                onSubmit={handleSubmit}

                className="  py-10 px-5 mb-10 w-1/2 items-center mx-auto rounded-lg bg-green-500  ">
                <div className="mb-5">
                    <label className="block text-black uppercase font-bold"
                        defaultChecked>
                        Por favor, verifique su correo electrónico:
                    </label> {""}
                    <input
                        id="Nombre"
                        type="text"
                        name="correo_electronico"
                        value={correo_electronico}
                        onChange={(e) => setEmail(e.target.value)}
                        className=" border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        placeholder="Correo electrónico "
                    ></input>
                </div>


                <div className="mb-5">
                    <label className="block text-black uppercase font-bold"
                        defaultChecked>
                        Nombre:
                    </label> {""}
                    <input
                        id="Nombre"
                        type="text"
                        name="nombre"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        className=" border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        placeholder="Nombre "


                    ></input>
                </div>

                <div className="mb-5">
                    <label className="block text-black uppercase font-bold">
                        Número de móvil:
                    </label> {""}
                    <input
                        // value={movil}
                        id="Movil"
                        type="text"
                        name="numero_movil"
                        value={numero_movil}
                        onChange={(e) => setMovil(e.target.value)}
                        className=" border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        placeholder="Movil"


                    ></input>
                </div>

                <div className="mb-5">
                    <label className="block text-black uppercase font-bold">
                        Ubicación:
                    </label> {""}
                    <input
                        // value={ubicacion}
                        id="Ubicacion"
                        type="text"
                        name="ubicacion"
                        value={ubicacion}
                        onChange={(e) => setUbicacion(e.target.value)}
                        className=" border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        placeholder="ubicacion"


                    ></input>
                </div>


                <div className="text-sm mb-2">
                    <p className="mt-2 block text-black uppercase font-bold">
                        Basura Papel: </p>
                    <input
                        type="radio"
                        value={"si"}
                        name="basura_papel"
                        checked={basura_papel === "si"}
                        onChange={(e) => setBasuraPapel(e.target.value)}
                        className="text-sm mx-1 cursor-pointer" />
                    <label>Sí</label>
                    <input
                        type="radio"
                        value={"no"}
                        name="basura_papel"
                        checked={basura_papel === "no"}
                        onChange={(e) => setBasuraPapel(e.target.value)}
                        className="text-sm mx-1 cursor-pointer" />
                    <label>No</label>
                </div>

                <div className="text-sm mb-2">
                    <p className="mt-2 block text-black uppercase font-bold">
                        Basura Plástico: </p>
                    <input
                        type="radio"
                        value={"si"}
                        name="basura_plastico"
                        checked={basura_plastico === "si"}
                        onChange={(e) => setBasuraPlastico(e.target.value)}
                        className="text-sm mx-1 cursor-pointer" />
                    <label>Sí</label>
                    <input
                        type="radio"
                        value={"no"}
                        name="basura_plastico"
                        checked={basura_plastico === "no"}
                        onChange={(e) => setBasuraPlastico(e.target.value)}
                        className="text-sm mx-1 cursor-pointer" />
                    <label>No</label>
                </div>

                <div className="text-sm mb-2">
                    <p className="mt-2 block text-black uppercase font-bold">
                        Basura Resto: </p>
                    <input
                        type="radio"
                        value={"si"}
                        name="basura_resto"
                        checked={basura_resto === "si"}
                        onChange={(e) => setBasuraResto(e.target.value)}
                        className="text-sm mx-1 cursor-pointer" />
                    <label>Sí</label>
                    <input
                        type="radio"
                        value={"no"}
                        name="basura_resto"
                        checked={basura_resto === "no"}
                        onChange={(e) => setBasuraResto(e.target.value)}
                        className="text-sm mx-1 cursor-pointer" />
                    <label>No</label>
                </div>

                <div className="text-sm mb-2">
                    <p className="mt-2 block text-black uppercase font-bold">
                        Basura Orgánico: </p>
                    <input
                        type="radio"
                        value={"si"}
                        name="basura_organico"
                        checked={basura_organico === "si"}
                        onChange={(e) => setBasuraOrganico(e.target.value)}
                        className="text-sm mx-1 cursor-pointer" />
                    <label>Sí</label>
                    <input
                        type="radio"
                        value={"no"}
                        name="basura_organico"
                        checked={basura_organico === "no"}
                        onChange={(e) => setBasuraOrganico(e.target.value)}
                        className="text-sm mx-1 cursor-pointer" />
                    <label>No</label>
                </div>

                <div className="text-sm mb-2">
                    <p className="mt-2 block text-black uppercase font-bold">
                        Basura Vidrio: </p>
                    <input
                        type="radio"
                        value={"si"}
                        name="basura_cristal"
                        checked={basura_cristal === "si"}
                        onChange={(e) => setBasuraCristal(e.target.value)}
                        className="text-sm mx-1 cursor-pointer" />
                    <label>Sí</label>
                    <input
                        type="radio"
                        value={"no"}
                        name="basura_cristal"
                        checked={basura_cristal === "no"}
                        onChange={(e) => setBasuraCristal(e.target.value)}
                        className="text-sm mx-1 cursor-pointer" />
                    <label>No</label>
                </div>

                <div className="text-sm mb-2">
                    <p className="mt-2 block text-black uppercase font-bold">
                        No Recicla: </p>
                    <input
                        type="radio"
                        value={"si"}
                        name="no_recicla"
                        checked={no_recicla === "si"}
                        onChange={(e) => setNoRecicla(e.target.value)}
                        className="text-sm mx-1 cursor-pointer" />
                    <label>Sí</label>
                    <input
                        type="radio"
                        value={"no"}
                        name="no_recicla"
                        checked={no_recicla === "no"}
                        onChange={(e) => setNoRecicla(e.target.value)}
                        className="mb-5 text-sm mx-1 cursor-pointer" />
                    <label>No</label>
                </div>





                <button
            variant="primary"
            type="submit"
            onClick={handleSubmit}
            className="py-2 px-2 bg-emerald-800 w-full p-3 text-white uppercase font-bold rounded-md hover:scale-105 cursor-pointer"
          >
            ENVIAR
          </button>


            </form>
        </>
    )

}
export default Formulario;