import NavBar_sesion from "./NavBar_sesion"


function Sesion() {

    return (

        <>

            <NavBar_sesion />
            {/* tarjeta */}
            <div id="Sesion" >


                <div className="mb-5 mt-20 rounded-md mx-auto p-20 sm:p-5 bg-gradient-to-r grid md:grid-cols-2 from-cyan-500 to-blue-500 py-20 sm:w-2/3 md:w-1/2 lg:w-1/2  border border-solid  border-black">


                    <div className="sm:col-span-1 mt-10 mb-10">
                        <img src="qr-code.png" className=" sm:py-5 sm:px-5 md:py-5 md:px-5 lg:py-5 lg:px-5  w-1/2 border  border-black" alt="" />
                    </div>
                    <div className=" sm:col-span-1 font-mono font-bold text-xl mt-10 mb-10">
                        <p>Nombre: Oscar Burgos</p>
                        <p>Puntos: 5000</p>
                        <p>ID: y6514xsc</p>
                    </div>

                </div>



               

                <h1 className="text-center mt-25 items-center text-7xl py-5 font-mono ">Sabias que?</h1>
 <div className=" border-solid border border-black w-1/2 items-center mx-auto mb-10" ></div>

                <div className="bg-gradient-to-r from-green-700 from-10% via-green-500 via-30% to-emerald-500 to-90% mb-2">

                </div>

                {/* footer */}
                <footer className=" bg-green-500">
                    <div className="  grid md:grid-cols-3  ">
                        <div className=" col-span-1 text-xl mb-8  lg:mr-7 text-center items-center "  >
                            <h1 className="py-4">Sobre Nosotros</h1>
                            <ul className="">
                                <li>
                                    <a href='#' className=' text-center col-span-1 text-xl mb-8  lg:mr-7 hover:text-white'>Inicio</a>
                                </li>
                            </ul>
                            <ul className="">
                                <li>
                                    <a href='#' className=' col-span-1 text-xl mb-8  lg:mr-7 hover:text-white'>Inicio</a>
                                </li>
                            </ul>
                        </div>
                        <div className=" col-span-1 text-xl mb-8 lg:mr-7 text-center items-center "  >
                            <h1 className="py-4" >Empresa</h1>
                            <ul className=" ">
                                <li>
                                    <a href='#' className=' col-span-1 text-xl mb-8 lg:mr-7 hover:text-white'>Inicio</a>
                                </li>
                            </ul>
                            <ul className="">
                                <li>
                                    <a href='#' className=' col-span-1 text-xl mb-8  lg:mr-7 hover:text-white'>Inicio</a>

                                </li>

                            </ul>
                        </div>
                        <div className=" col-span-1 text-xl mb-8 lg:mr-7 text-center items-center "  >
                            <h1 className="py-4" >Ayuda y soporte</h1>
                            <ul className="">
                                <li>
                                    <a href='#' className=' col-span-1 text-xl mb-8  lg:mr-7 hover:text-white'>Inicio</a>
                                </li>
                            </ul>
                            <ul className="">
                                <li>
                                    <a href='#' className=' col-span-1 text-xl mb-8  lg:mr-7 hover:text-white'>Inicio</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>

                    </div>

                </footer >





            </div >


        </>





    )

}
export default Sesion