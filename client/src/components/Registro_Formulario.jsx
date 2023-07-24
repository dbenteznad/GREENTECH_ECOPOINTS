import React, { useState } from "react";
import Registro from './Registro';
import axios from "axios";





function Formulario() {

    const [nombre, setNombre] = useState("");
    const [numero_movil, setMovil] = useState("");
    const [ubicacion, setUbicacion] = useState("");
    const [basura_papel, setBasuraPapel] = useState("")
    const [basura_plastico, setBasuraPlastico] = useState("")
    const [basura_resto, setBasuraResto] = useState("")
    const [basura_organico, setBasuraOrganico] = useState("")
    const [basura_cristal, setBasuraCristal] = useState("")
    const [no_recicla, setNoRecicla] = useState("")
    // Resto de los estados para el formulario...
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Establecer la configuración de la solicitud al backend
      const configuration = {
        method: "put",
        url: "http://localhost:5000/api/v1/usuarios/register",
        data: {
          nombre,
          ubicacion,
          correo_electronico: email, // Asegúrate de que el nombre del campo sea "correo_electronico" en el servidor
          movil,
          // Resto de los campos que necesitas enviar al servidor...
        },
      };
  
      // Realizar la llamada a la API usando axios
      axios(configuration)
        .then((result) => {
          // Obtener el token de la respuesta
          const token = result.data.token;
  
          // Almacenar el token en una cookie con una duración de 1 hora
          document.cookie = `userToken=${token}; path=/`;
  
          // Redirigir al usuario a la página de inicio (u otra página de tu elección)
          window.location.href = "/home"; // Cambia "/home" por la ruta que desees redirigir al usuario
        })
        .catch((error) => {
          // Manejo del error
        });
    }
  


    return (
        <>
            <h1 className="mt-5 text-center text-5xl mb-10" >Rellene los siguientes campos:</h1>
            <form
                onChange={Registro}

                className="  py-10 px-5 mb-10 w-1/2 items-center mx-auto rounded-lg bg-green-500  ">



                <div className="mb-5">
                    <label className="block text-black uppercase font-bold"
                        defaultChecked>
                        Nombre:
                    </label> {""}
                    <input
                        id="Nombre"
                        type="text"
                        // value={nombre}
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
                        name="Basura_Papel"
                        checked
                        className="text-sm mx-1 cursor-pointer" />
                    <label>Sí</label>
                    <input
                        type="radio"
                        value={"no"}
                        name="Basura_Papel"
                        className="text-sm mx-1 cursor-pointer" />
                    <label>No</label>
                </div>

                <div className="text-sm mb-2">
                    <p className="mt-2 block text-black uppercase font-bold">
                        Basura Plástico: </p>
                    <input
                        type="radio"
                        value={"si"}
                        name="Basura_Plastico"
                        checked
                        className="text-sm mx-1 cursor-pointer" />
                    <label>Sí</label>
                    <input
                        type="radio"
                        value={"no"}
                        name="Basura_Plastico"
                        className="text-sm mx-1 cursor-pointer" />
                    <label>No</label>
                </div>

                <div className="text-sm mb-2">
                    <p className="mt-2 block text-black uppercase font-bold">
                        Basura Resto: </p>
                    <input
                        type="radio"
                        value={"si"}
                        name="Basura_Resto"
                        checked
                        className="text-sm mx-1 cursor-pointer" />
                    <label>Sí</label>
                    <input
                        type="radio"
                        value={"no"}
                        name="Basura_Resto"
                        className="text-sm mx-1 cursor-pointer" />
                    <label>No</label>
                </div>

                <div className="text-sm mb-2">
                    <p className="mt-2 block text-black uppercase font-bold">
                        Basura Orgánico: </p>
                    <input
                        type="radio"
                        value={"si"}
                        name="Basura_Organico"
                        checked
                        className="text-sm mx-1 cursor-pointer" />
                    <label>Sí</label>
                    <input
                        type="radio"
                        value={"no"}
                        name="Basura_Organico"
                        className="text-sm mx-1 cursor-pointer" />
                    <label>No</label>
                </div>

                <div className="text-sm mb-2">
                    <p className="mt-2 block text-black uppercase font-bold">
                        Basura Vidrio: </p>
                    <input
                        type="radio"
                        checked
                        value={"si"}
                        name="Basura_Vidrio"
                        className="text-sm mx-1 cursor-pointer" />
                    <label>Sí</label>
                    <input
                        type="radio"
                        value={"no"}
                        name="Basura_Vidrio"
                        className="text-sm mx-1 cursor-pointer" />
                    <label>No</label>
                </div>

                <div className="text-sm mb-2">
                    <p className="mt-2 block text-black uppercase font-bold">
                        No Recicla: </p>
                    <input
                        type="radio"
                        value={"si"}
                        name="No_recicla"
                        checked
                        className="text-sm mx-1 cursor-pointer" />
                    <label>Sí</label>
                    <input
                        type="radio"
                        value={"no"}
                        name="No_recicla"
                        className="mb-5 text-sm mx-1 cursor-pointer" />
                    <label>No</label>
                </div>





                <input type="submit"
                    className=" py-2 px-2 bg-green-700 w-full p-3 text-white uppercase font-bold rounded-md hover:scale-105 cursor-pointer"
                />


            </form>
        </>
    )

}
export default Formulario;