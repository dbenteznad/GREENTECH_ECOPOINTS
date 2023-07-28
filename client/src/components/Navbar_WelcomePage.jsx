import React, { useState } from 'react';
import openMenu from './Menu_Burguer_Home';
import { Link } from 'react-router-dom';
import '../styles/Navbar_WelcomePage.css'


function Navbar_WelcomePage() {
  return (
    <>
      <nav className='  py-5 sm:py-2 bg-green-500 sticky top-0 shadow-md z-20'>
        <div className='container mx-auto flex px-8 sm:px-4 lg:px-0 ' >
          <button
            className='flex flex-grow items-center'>
            {/* link para rederigirse a la welcomePage */}
            <a href="/" className="flex items-center">
              <img
                id='EcopointsLogo'
                className='hover:scale-110'
                src='EcoPointsLogo2.png'
                alt='EcoPoints Logo'
              />
            </a>
          </button>
          {/* hidden para que desaparezca cuando se minimiza */}
          <div className='flex lg:hidden'>
            <img id='menu-burguer' className='h-10 hover:scale-110' src='menu.png' onClick={openMenu} />
          </div>
          <div id='menu' className=' lg:flex hidden flex-grow justify-between absolute lg:relative lg:top-0 top-20 left-0 bg-green-500
            w-full lg:w-auto items-center py-14 lg:py-0 px-8 sm:px-24 lg:px-0'>
            <div className='flex flex-col lg:flex-row mb-8 lg:mb-0 font-bold'>
              <a href='#Por_que_proyecto' className='  hover:text-black lg:mr-7 mb-8 lg:mb-0 text-white  '>Por qué el proyecto</a>
              <a href='#Como_funciona' className=' hover:text-black lg:mr-7 mb-8 lg:mb-0 text-white'>Cómo funciona</a>
              <a href='#sobre_nosotros' className=' hover:text-black lg:mr-7 mb-8 lg:mb-0 text-white'>Sobre nosotros </a>
              <a href='prediccion_welcomepage' className=' hover:text-black lg:mr-7 mb-8 lg:mb-0 text-white '>Predicción</a>
              <a href='dashboard' className=' hover:text-black text-white '>Dashboard</a>


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