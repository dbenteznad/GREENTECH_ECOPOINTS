
import { Link } from 'react-router-dom';
import openMenu from './Menu';
import openPerfil from './Menu_perfil';

function NavBar_sesion() {



    return (
        <>
            <nav className=' py-6 sticky bg-green-500  top-0 '>

                <div className='container mx-auto flex px-8 lg:px-0 '>

                    <div className='flex flex-grow items-center'>
                        <img className='h-14' src='EcoPointsLogo.png' />
                    </div>

                    <div className='flex lg:hidden'>
                        <img className='h-10' src='menu.png' onClick={openMenu} />
                    </div>





                    <div id='menu' className=' lg:flex hidden flex-grow justify-between absolute lg:relative lg:top-0 top-20 left-0 bg-green-500
        w-full lg:w-auto items-center py-14 lg:py-0 px-8 sm:px-24 lg:px-0 font-bold'>
                        <div className='flex flex-col lg:flex-row mb-8 lg:mb-0'>
                            <a href='Premios' className='text-white uppercase  hover:text-black lg:mr-7 mb-8 lg:mb-0'>Premios</a>
                            <a href='#' className='text-white uppercase hover:text-black lg:mr-7 mb-8 lg:mb-0 '>Mapa</a>
                            <a href='Foro' className='text-white uppercase hover:text-black lg:mr-7 mb-8 lg:mb-0 '>Foro</a>
                            <a href='#' className='text-white  uppercase hover:text-black '>ChatBot</a>

                        </div>

                        <div className='flex flex-col lg:flex-row text-center'>
                          
                            <button onClick={openPerfil} id="dropdownOffsetButton" data-dropdown-toggle="dropdownOffset" data-dropdown-offset-distance="35" data-dropdown-offset-skidding="0" className="text-white font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2  " type="button"><img src="perfil.jpg" className='h-12 rounded-full' alt="" /><svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                            </svg></button>
                            
                            <div id="dropdownOffset"  className="z-10 rounded-xl hidden bg-white divide-y divide-gray-100  w-35 ">
                                <ul class="py-2 text-sm " aria-labelledby="dropdownDefault">
                                    <li>
                                        <a href="Sesion" class="block px-4 py-2 hover:bg-green-400  ">Inicio</a>
                                    </li>
                                    <li>
                                        <a href="Perfil" class="block px-4 py-2 hover:bg-green-400  " >Ajustes</a>
                                    </li>
                                    <li>
                                        <a href="Home" class="block px-4 py-2 hover:bg-green-400 ">Cerrar Sesion</a>
                                    </li>
                                    
                                </ul>
                            </div>


                        </div>
                    </div>
                </div>


            </nav >



        </>

    );
}

export default NavBar_sesion;