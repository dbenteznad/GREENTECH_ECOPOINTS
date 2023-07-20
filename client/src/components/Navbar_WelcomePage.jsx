import React, { useState } from 'react';
import openMenu from './Menu_Burguer_Home';
import { Link } from 'react-router-dom';
import '../styles/Navbar_WelcomePage.css'


function Navbar_WelcomePage() {
  return (
    <>
      <nav className='  py-4 bg-green-500 sticky top-0 pt-3 shadow-md  '>
        <div className='container mx-auto flex px-8 lg:px-0 ' >
          <button
           className='flex flex-grow items-center'>
           <Link to="/" rel="stylesheet" href='Home' > <img id='EcoPointsLogo' className='hover:scale-110' src='EcoPointsLogo.png' /> </Link>
          </button>
          <div className='flex lg:hidden'>
            <img id='menu-burguer' className='h-10 hover:scale-110' src='menu.png' onClick={openMenu} />
          </div>
          <div id='menu' className=' lg:flex hidden flex-grow justify-between absolute lg:relative lg:top-0 top-20 left-0 bg-green-500
            w-full lg:w-auto items-center py-14 lg:py-0 px-8 sm:px-24 lg:px-0'>
            <div className='flex flex-col lg:flex-row mb-8 lg:mb-0 font-bold'>
              <a href='#Por_que_proyecto'  className='  hover:text-white lg:mr-7 mb-8 lg:mb-0 text-black  '>Por qué el proyecto</a>
              <a href='#Como_funciona' className=' hover:text-white lg:mr-7 mb-8 lg:mb-0 text-black'>Cómo funciona</a>
              <a href='#sobre_nosotros' className=' hover:text-white lg:mr-7 mb-8 lg:mb-0 text-black'>Sobre nosotros </a>
              <a href='Blog' className='  hover:text-white text-black '>Blog</a>
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