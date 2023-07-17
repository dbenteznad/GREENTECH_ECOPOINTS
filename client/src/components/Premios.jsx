import NavBar_sesion from "./NavBar_sesion"
function Premios() {

    return (


        <>
            <NavBar_sesion />


            <div className=" container mx-auto grid md:grid-cols-3">


                {/* premio1 */}

                <div className="py-5 col-span-1 rounded-lg hover:bg-green-400 mr-4 mb-6 " >

                    <h1 className="text-center text-lg mb-2 ">Premio1</h1>
                    <img className=" h-2/3 mx-auto" src="premio1.png" />
                    <h1 className="text-center">Puntos:</h1>
                    <h1 className="text-center">1000</h1>

                </div>
                {/* premio2 */}
                <div className=" py-5 col-span-1 rounded-lg hover:bg-green-400 mr-4 mb-6 " >
                    <h1 className="text-center text-lg mb-2 " >Premio2</h1>
                    <img className=" h-2/3 mx-auto" src="premio2.jpg" />
                    <h1 className="text-center">Puntos:</h1>
                    <h1 className="text-center">2000</h1>

                </div>
                {/* Premio3 */}
                <div className="py-5 col-span-1 rounded-lg  hover:bg-green-400 mr-4 mb-6 " >

                    <h1 className="text-center text-lg mb-2 ">Premio3</h1>
                    <img className=" h-2/3 mx-auto" src="premio3.jpg" />
                    <h1 className="text-center">Puntos:</h1>
                    <h1 className="text-center">3000</h1>
                </div>



                {/* premio4 */}
                <div className="py-5  col-span-1 rounded-lg hover:bg-green-400  mr-4 mb-6  " >

                    <h1 className="text-center text-lg mb-2  ">Premio4</h1>
                    <img className="mx-auto " src="premio1.png" />
                    <h1 className="text-center">Puntos:</h1>
                    <h1 className="text-center">4000</h1>

                </div>
                {/* premio5 */}
                <div className=" py-5 col-span-1 rounded-lg hover:bg-green-400 mr-4 mb-6 " >
                    <h1 className="text-center text-lg mb-2 " >Premio5</h1>
                    <img className=" mx-auto" src="premio1.png" />
                    <h1 className="text-center">Puntos:</h1>
                    <h1 className="text-center">5000</h1>

                </div>
                {/* premio6 */}
                <div className="py-5 col-span-1 rounded-lg  hover:bg-green-400 mr-4 mb-6 " >

                    <h1 className="text-center text-lg mb-2 ">Premio6</h1>
                    <img className=" mx-auto" src="premio1.png" />
                    <h1 className="text-center">Puntos:</h1>
                    <h1 className="text-center">6000</h1>
                </div>
                {/* premio7 */}
                <div className="py-5  col-span-1 rounded-lg hover:bg-green-400 mr-4  mb-6 " >

                    <h1 className="text-center text-lg mb-2  ">Premio7</h1>
                    <img className=" mx-auto " src="premio1.png" />
                    <h1 className="text-center">Puntos:</h1>
                    <h1 className="text-center">7000</h1>

                </div>
                {/* premio8 */}
                <div className=" py-5 col-span-1 rounded-lg hover:bg-green-400 mr-4  mb-6" >
                    <h1 className="text-center text-lg mb-2 " >Premio8</h1>
                    <img className=" mx-auto " src="premio1.png" />
                    <h1 className="text-center">Puntos:</h1>
                    <h1 className="text-center">8000</h1>

                </div>
                {/* premio9 */}
                <div className="py-5 col-span-1 rounded-lg  hover:bg-green-400 mr-4  mb-6" >

                    <h1 className="text-center text-lg mb-2 ">Premio9</h1>
                    <img className=" mx-auto " src="premio1.png" />
                    <h1 className="text-center">Puntos:</h1>
                    <h1 className="text-center">9000</h1>
                </div>
            </div>
            <footer className="  bg-gradient-to-r from-green-700 from-10% via-green-500 via-30% to-emerald-500 to-90%">
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









        </>


    )






}

export default Premios;