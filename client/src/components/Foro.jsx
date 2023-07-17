import NavBar_sesion from "./NavBar_sesion"

function Foro() {
    return (
        <>
            <NavBar_sesion />

            <h1 className="text-center mt-25 items-center text-7xl py-5 font-mono" >Foro</h1>
            <form
                className=" bg-white shadow-md rounded-lg py-10 px-5 mb-10 w-1/2 items-center mx-auto">



                <div className="mb-5">
                    <label  className="block text-gray-700 uppercase font-bold">
                        Nombre
                    </label> {""}
                    <input
                        id="mascota"
                        type="text"
                        className=" border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        placeholder="Nombre "


                    ></input>
                </div>
                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold">
                        ubicacion
                    </label> {""}
                    <input
                        id="propietario"
                        type="text"
                        className=" border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        placeholder="ubicacion"


                    ></input>
                </div>
                <div className="mb-5">
                    <label  className="block text-gray-700 uppercase font-bold">
                        Email
                    </label> {""}
                    <input
                        id="email"
                        type="email"
                        className=" border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        placeholder="Email de Contacto"


                    ></input>
                </div>



                <div className="mb-5">
                    <label  className="block text-gray-700 uppercase font-bold">
                        Comentario
                    </label> {""}
                    < textarea
                        id="Comentario "
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md "



                    />
                </div>
                <input type="submit"
                    className=" bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer"
                />


            </form>
        </>
    )
}
export default Foro