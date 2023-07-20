import NavBar_sesion from "./NavBar_sesion"


function Sesion() {

    return (

        <>

            <NavBar_sesion />
            {/* tarjeta */}
            <div id="Sesion"  className=" bg-green-500">


                <div className="mb-5 rounded-2xl mx-auto p-20 sm:p-5 bg-[url('/public/Tarjeta.png')] grid md:grid-cols-2  py-10 sm:py-5 sm:w-1/2 md:w-1/2 lg:w-1/2  border border-solid  border-green-700">


                    <div className="sm:col-span-1  mt-10 mb-10">
                        <img src="qr-code.png" className=" rounded-2xl sm:py-5 sm:px-5 md:py-5 md:px-5 lg:py-5 lg:px-5  w-1/2 border  border-black" alt="" />
                    </div>
                    <div className=" sm:col-span-1  font-mono font-bold text-xl mt-10 mb-10">
                        <img className="w-1/2" src="EcoPointsLogo.png" alt="" />
                        <p>Usuario: Oscar Burgos</p>
                        <p>Puntos: 5000</p>
                        <p>ID: y6514xsc</p>
                    </div>

                </div>
                <div className=" container mx-auto grid md:grid-cols-3">

                    <div className="py-5 col-span-1 rounded-lg mr-4 mb-6 font-mono hover:scale-110 " >
                        {/* premio1 */}
                        <h1 className="text-center text-lg mb-2 ">Premio 1</h1>
                        <img className=" h-2/3 mx-auto rounded-xl" src="premio1.png" />
                        <h1 className="text-center">Puntos:</h1>
                        <h1 className="text-center">1000</h1>

                    </div>
                    {/* premio2 */}
                    <div className=" py-5 col-span-1 rounded-lg  mr-4 mb-6 font-mono hover:scale-110  " >
                        <h1 className="text-center text-lg mb-2 " >Premio 2</h1>
                        <img className=" h-2/3 mx-auto rounded-xl" src="premio2.jpg" />
                        <h1 className="text-center">Puntos:</h1>
                        <h1 className="text-center">2000</h1>
                    </div>
                    {/* Premio3 */}
                    <div className="py-5 col-span-1 rounded-md hover:scale-110    mr-4 mb-6 font-mono " >

                        <h1 className="text-center text-lg mb-2 ">Premio 3</h1>
                        <img className=" h-2/3 mx-auto rounded-xl" src="premio3.jpg" />
                        <h1 className="text-center">Puntos:</h1>
                        <h1 className="text-center">3000</h1>
                    </div>
                     </div >
                     {/* <a href='Premios' className='text-black uppercase text-left mx-auto hover:text-blue-600 lg:mr-7 mb-8 lg:mb-0'>Ver Mas</a> */}
                </div>
                <div className=" border-solid border border-black w-1/2 items-center mx-auto mb-10" ></div>
                <h1 className="text-center mt-25 items-center text-7xl py-5 font-mono ">Sabias que?</h1>

                <div className="bg-gradient-to-r from-green-700 from-10% via-green-500 via-30% to-emerald-500 to-90% mb-2">

                </div>



                <div className=" container mx-auto grid md:grid-cols-2">
                    <div className="py-5 col-span-1 rounded-lg   mr-4 mb-6 font-mono" >

                        
                        <img className=" h-2/3 mx-auto" src="grafico-sesion.png" />
                       
                      


                    </div>
                    <div className="py-5 col-span-1 rounded-lg   mr-4 mb-6 font-mono" >

                        <h1 className="text-center text-lg mb-2 ">Total</h1>
                        <img className=" h-2/3 mx-auto" src="grafico-sesion.png" />
                      
                       

                    </div>

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





           


        </>





    )

}
export default Sesion