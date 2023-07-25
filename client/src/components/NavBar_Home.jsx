import { Link } from 'react-router-dom';
import openMenu from './Menu_Burguer_Home';
import openPerfil from './Menu_Burguer_Perfil';
import '../styles/Navbar_Home.css'
import axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();

// Obtener el token generado en el login
const token = cookies.get("TOKEN");

function NavBar_Home() {

    // Cerrar sesión
    const logout = () => {
        // Destruye la cookie
        cookies.remove("TOKEN", { path: "/" });
        // Rediríge al usuario a la página principal
        window.location.href = "/";
    }

    return (
        <>
            <nav className=' py-4 bg-green-500 sticky top-0 pt-3 shadow-md z-10 '>

                <div className='container mx-auto flex px-8 lg:px-0 '>

                    <div className='flex flex-grow items-center'>
                        <img id='EcoPointsLogo' className='hover:scale-110' src='EcoPointsLogo2.png' />
                    </div>

                    <div className='flex lg:hidden'>
                        <img id='menu-burguer' className='h-10' src='menu.png' onClick={openMenu} />
                    </div>





                    <div id='menu' className=' lg:flex hidden flex-grow justify-between absolute lg:relative lg:top-0 top-20 left-0 bg-green-500
        w-full lg:w-auto items-center py-14 lg:py-0 px-8 sm:px-24 lg:px-0 font-bold'>
                        <div className='flex flex-col lg:flex-row mb-8 lg:mb-0'>
                            <a href='Premios' className='text-white  hover:text-black lg:mr-7 mb-8 lg:mb-0 uppercase'>Premios</a>
                            <a href='#' className='text-white  hover:text-black lg:mr-7 mb-8 lg:mb-0 uppercase'>Mapa</a>
                            <a href='Foro' className='text-white  hover:text-black lg:mr-7 mb-8 lg:mb-0 uppercase'>Foro</a>
                            <a href='Prediccion_Home' className='text-white   hover:text-black '>Estadistica</a>

                        </div>

                        <div className='flex flex-col lg:flex-row text-center'>

                            <button onClick={openPerfil} id="dropdownOffsetButton" data-dropdown-toggle="dropdownOffset" data-dropdown-offset-distance="35" data-dropdown-offset-skidding="0" className="text-white font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2  " type="button"><img src="perfil.jpg" className='h-12 rounded-full' alt="" /><svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                            </svg></button>

                            <div id="dropdownOffset" className="z-10 rounded-xl hidden bg-white divide-y divide-gray-100  w-35 ">
                                <ul class="py-2 text-sm " aria-labelledby="dropdownDefault">
                                    <li>
                                        <a href="home" class="block px-4 py-2 hover:bg-green-400  ">Inicio</a>
                                    </li>
                                    <li>
                                        <a href="Perfil" class="block px-4 py-2 hover:bg-green-400  " >Ajustes</a>
                                    </li>
                                    {/* logout */}
                                    <button type="submit" variant="danger" class="block px-4 py-2 hover:bg-green-400" onClick={() => logout()}>
                                        Cerrar Sesión
                                    </button>
                                    {/* <li>
                                        <a href="#" class="block px-4 py-2 hover:bg-green-400" onClick="logout()">Cerrar Sesión</a>
                                    </li> */}


                                </ul>
                            </div>


                        </div>
                    </div>
                </div>


            </nav >



        </>

    );
}

export default NavBar_Home;