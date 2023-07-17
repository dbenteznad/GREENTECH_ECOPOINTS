
// import { useEffect, useState } from "react";

import Navbar from "./Navbar";
// import Usuarios from "./Usuarios";

function Formulario() {


    // const [nombre, setNombre] = useState('');
    // const [ubicacion, setUbicacion] = useState('');
    //  const [movil, setMovil] = useState('');
    //  useEffect(() => {
    //     setNombre(usuario.nombre)
    //     setUbicacion(usuario.email)
    //     setMovil(usuario.movil)
    //     setEmail(usuario.email)
    //  }

    //  )



    return (
        <>
            <Navbar />

            <h1 className="text-center text-5xl mb-10 font-mono " >Formulario Inscripción</h1>
            <form
                onChange={Registro}

                className="  py-10 px-5 mb-10 w-1/2 items-center mx-auto rounded-lg bg-green-500  ">



                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold"
                        defaultChecked>
                        Nombre
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
                    <label className="block text-gray-700 uppercase font-bold">
                        ubicacion
                    </label> {""}
                    <input
                        // value={ubicacion}
                        id="Ubicacion"
                        type="text"
                        className=" border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        placeholder="ubicacion"


                    ></input>
                </div>
                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold">
                        Email
                    </label> {""}
                    <input
                        // value={email}
                        id="email"
                        type="email"
                        className=" border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        placeholder="Email de Contacto"


                    ></input>
                </div>
                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold">
                        Numero Movil
                    </label> {""}
                    <input
                        // value={movil}
                        id="Movil"
                        type="Number"
                        className=" border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        placeholder="Movil"


                    ></input>
                </div>
                <div className="text-sm mb-2">
                    <p className="mt-2 block text-gray-700 uppercase font-bold">
                        Basura Papel </p>
                    <input
                        type="radio"
                        value={"si"}
                        name="Basura_Papel"
                        checked
                        className="text-sm mx-1 cursor-pointer" />
                    <label>si</label>
                    <input
                        type="radio"
                        value={"no"}
                        name="Basura_Papel"
                        className="text-sm mx-1 cursor-pointer" />
                    <label>no</label>
                </div>
                <div className="text-sm mb-2">
                    <p className="mt-2 block text-gray-700 uppercase font-bold">
                        Basura Plastico </p>
                    <input
                        type="radio"
                        value={"si"}
                        name="Basura_Plastico"
                        checked
                        className="text-sm mx-1 cursor-pointer" />
                    <label>si</label>
                    <input
                        type="radio"
                        value={"no"}
                        name="Basura_Plastico"
                        className="text-sm mx-1 cursor-pointer" />
                    <label>no</label>
                </div>
                <div className="text-sm mb-2">
                    <p className="mt-2 block text-gray-700 uppercase font-bold">
                        Basura Resto </p>
                    <input
                        type="radio"
                        value={"si"}
                        name="Basura_Resto"
                        checked
                        className="text-sm mx-1 cursor-pointer" />
                    <label>si</label>
                    <input
                        type="radio"
                        value={"no"}
                        name="Basura_Resto"
                        className="text-sm mx-1 cursor-pointer" />
                    <label>no</label>
                </div>
                <div className="text-sm mb-2">
                    <p className="mt-2 block text-gray-700 uppercase font-bold">
                        Basura Organico </p>
                    <input
                        type="radio"
                        value={"si"}
                        name="Basura_Organico"
                        checked
                        className="text-sm mx-1 cursor-pointer" />
                    <label>si</label>
                    <input
                        type="radio"
                        value={"no"}
                        name="Basura_Organico"
                        className="text-sm mx-1 cursor-pointer" />
                    <label>no</label>
                </div>
                <div className="text-sm mb-2">
                    <p className="mt-2 block text-gray-700 uppercase font-bold">
                        Basura Vidrio </p>
                    <input
                        type="radio"
                        checked
                        value={"si"}
                        name="Basura_Vidrio"
                        className="text-sm mx-1 cursor-pointer" />
                    <label>si</label>
                    <input
                        type="radio"
                        value={"no"}
                        name="Basura_Vidrio"
                        className="text-sm mx-1 cursor-pointer" />
                    <label>no</label>
                </div>
                <div className="text-sm mb-2">
                    <p className="mt-2 block text-gray-700 uppercase font-bold">
                        No Recicla </p>
                    <input
                        type="radio"
                        value={"si"}
                        name="No_recicla"
                        checked
                        className="text-sm mx-1 cursor-pointer" />
                    <label>si</label>
                    <input
                        type="radio"
                        value={"no"}
                        name="No_recicla"
                        className="mb-5 text-sm mx-1 cursor-pointer" />
                    <label>no</label>
                </div>





                <input type="submit"
                    className=" py-2 px-2 bg-green-700 w-full p-3 text-white uppercase font-bold rounded-md hover:scale-105 cursor-pointer"
                />


            </form>
        </>
    )

}
export default Formulario