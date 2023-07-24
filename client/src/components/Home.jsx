import NavBar_Home from "./NavBar_Home";
import '../styles/Home.css'
import axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();
import videoBG from '../assets/video_home1.mp4'


function Home() {

    return (

        <>

            <NavBar_Home />
            {/* tarjeta */}
            <div id="Sesion" className="mb-10" >

                <div class="contenedor">
                    <section className="tarjeta" id="tarjeta">
                        <div className="delantera">
                            <div className="logo-marca" id="logo-marca">
                                {/* <img src="img/logos/visa.png" alt="" /> */}
                            </div>
                            <img src=".../../public/EcoPoint.png" className="chip" alt="" />
                            <div className="datos">
                                <div className="grupo" id="numero">
                                    <p className="label"><b>Tarjeta Identificatoria</b></p>
                                    <p className="numero">#### #### #### ####</p>
                                </div>
                                <div className="flexbox">
                                    <div className="grupo" id="nombre">
                                        <p className="label"><b>Nombre Usuario:</b></p>
                                        <p className="nombre">Oscar Burgos</p>
                                    </div>
                                    <div className="grupo" id="expiracion">
                                        <p className="label"><b>EcoPoints acumulados:</b></p>
                                        <p className="expiracion">
                                            5000
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div class="contenedor-btn">
                        <button class="btn-abrir-formulario" id="btn-abrir-formulario">
                            <img class="x" src=".../../public/x.png" alt="" />
                        </button>
                    </div>
                    <video id="video-hero" src={videoBG} autoPlay loop muted></video>
                </div>
                {/* <a href='Premios' className='text-black uppercase text-left mx-auto hover:text-blue-600 lg:mr-7 mb-8 lg:mb-0'>Ver Mas</a> */}
            </div>
            <div id="premios" className="container mx-auto grid md:grid-cols-3">

                <div className="py-5 col-span-1 rounded-lg mr-4 mb-6  hover:scale-110 bg-emerald-500" >
                    {/* premio1 */}
                    <h1 className="text-center text-lg mb-2 "><b>Premio 1</b></h1>
                    <img className=" h-2/3 mx-auto rounded-xl" src="premio1.png" />
                    <h1 className="text-center"><b>Puntos:</b></h1>
                    <h1 className="text-center">1000</h1>

                </div>
                {/* premio2 */}
                <div className=" py-5 col-span-1 rounded-lg  mr-4 mb-6 hover:scale-110  bg-emerald-500" >
                    <h1 className="text-center text-lg mb-2 " ><b>Premio 2</b></h1>
                    <img className=" h-2/3 mx-auto rounded-xl" src="premio2.jpg" />
                    <h1 className="text-center"><b>Puntos:</b></h1>
                    <h1 className="text-center">2000</h1>
                </div>
                {/* Premio3 */}
                <div className="py-5 col-span-1 rounded-md hover:scale-110    mr-4 mb-6 bg-emerald-500" >

                    <h1 className="text-center text-lg mb-2 text"><b>Premio 3</b></h1>
                    <img className=" h-2/3 mx-auto rounded-xl" src="premio3.jpg" />
                    <h1 className="text-center"><b>Puntos:</b></h1>
                    <h1 className="text-center">3000</h1>
                </div>
            </div >
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


            {/* Footer */}
            <footer className="  bg-green-500">
                <div className="  grid md:grid-cols-3  ">
                    <div className=" col-span-1 text-xl mb-8  lg:mr-7 text-center items-center "  >
                        <h1 className="pt-4 col-span-1 text-xl mb-8 lg:mr-7 font-bold text-white">Sobre Nosotros</h1>
                        <ul className="">
                            <li>
                                <a href='#' className=' text-center col-span-1 text-xl mb-8  lg:mr-7 hover:text-black text-center text-white'>Quienes Somos</a>
                            </li>
                        </ul>
                        <ul className="">
                            <li>
                                <a href='#' className=' col-span-1 text-xl mb-8  lg:mr-7 hover:text-black text-center text-white'>Blog</a>
                            </li>
                        </ul>
                    </div>
                    <div className=" col-span-1 text-xl mb-8 lg:mr-7 text-center items-center "  >
                        <h1 className="pt-4 col-span-1 text-xl mb-8 lg:mr-7 font-bold text-white" >GreenTech</h1>
                        <ul className=" ">
                            <li>
                                <a href='#' className=' col-span-1 text-xl mb-8 lg:mr-7 hover:text-black text-white'>Productos</a>
                            </li>
                        </ul>
                    </div>
                    <div className=" col-span-1 text-xl mb-8 lg:mr-7 text-center items-center "  >
                        <h1 className="pt-4 col-span-1 text-xl mb-8 lg:mr-7 font-bold text-white"  >Ayuda y soporte</h1>
                        <ul className="">
                            <li>
                                <a href='#' className=' col-span-1 text-xl mb-8  lg:mr-7 hover:text-black text-white'>Contacto</a>
                            </li>
                        </ul>
                        <ul className="">
                            <li>
                                <a href='#' className=' col-span-1 text-xl mb-8  lg:mr-7 hover:text-black text-white'>Inicio</a>
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
export default Home;