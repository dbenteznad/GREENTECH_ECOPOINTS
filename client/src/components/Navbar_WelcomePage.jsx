import React, { useState } from 'react';
import openMenu from './Menu_Burguer_Home';
import { Link } from 'react-router-dom';
import '../styles/Navbar_WelcomePage.css'


function Navbar_WelcomePage() {
  return (
    <>
      <nav className='bg-green-500 sticky top-0 shadow-md z-10 '>
        <div className='container mx-auto flex px-8 lg:px-0 ' >
          <button
           className='flex flex-grow items-center'>
           <Link to="/" rel="stylesheet" href='WelcomePage.jsx' > <img className='hover:scale-110 h-20' src='EcoPointsLogo.png' /> </Link>
          </button>
          <div className='flex lg:hidden'>
            <img id='menu-burguer' className='h-10 hover:scale-110' src='menu.png' onClick={openMenu} />
          </div>
          <div id='menu' className=' lg:flex hidden flex-grow justify-between absolute lg:relative lg:top-0  left-0 bg-green-500
            w-full lg:w-auto items-center lg:py-0 px-8 sm:px-24 lg:px-0'>
            <div className='flex flex-col lg:flex-row lg:mb-0 font-bold'>
              <a href='#Por_que_proyecto'  className='  hover:text-black lg:mr-7 mb-8 lg:mb-0 text-white  '>Por qué el proyecto</a>
              <a href='#Como_funciona' className=' hover:text-black lg:mr-7 mb-8 lg:mb-0 text-white'>Cómo funciona</a>
              <a href='#sobre_nosotros' className=' hover:text-black lg:mr-7 mb-8 lg:mb-0 text-white'>Sobre nosotros </a>
              <a href='Prediccion_WelcomePage' className='  hover:text-black text-white '>Estadisticas</a>
            </div>
            <div className='flex flex-col lg:flex-row text-center font-bold'>
              <a className='  text-white   py-2.5 px-4 rounded-md bg-emerald-800  hover:scale-110 lg:mr-4 mb-8 lg:mb-0' href='Login'>Iniciar sesión</a>
              <a id='Registrate' className=' text-white   py-2.5 px-4 rounded-md bg-emerald-800  hover:scale-110 lg:mr-4 mb-8 lg:mb-0' href='Registro'>Regístrate</a>
            </div>
          </div>
        </div>
      </nav >
    </>
  );
}

export default Navbar_WelcomePage;