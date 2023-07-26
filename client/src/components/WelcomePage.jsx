import { useState } from "react";
import Navbar_WelcomePage from "./Navbar_WelcomePage";
import axios from "axios";
import '../styles/WelcomePages.css';
import videoBG from '../assets/chica_reciclando.mp4';
import GraficaCat from "../charts/GraficaCat";
import GraficaEsp from "../charts/GraficaEs";
import GraficaComp from "../charts/GraficaComp";
import Chat from "../partials/ChatBot";




function WelcomePage() {

  const linkedInProfileUrlNestor = 'https://www.linkedin.com/in/néstorolivera';
  const linkedInProfileUrlDaniCasanova = 'https://www.linkedin.com/in/daniel-ben%C3%ADtez-nadal-85388126b/';
  const linkedInProfileUrlDaniBenitez = 'https://www.linkedin.com/in/danicf/';


  const [correo_electronico, setEmail] = useState("");
  const [contrasena, setPassWord] = useState("");
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);

  const handleSubmit = (e) => {
    // Evitar que el formulario actualice toda la página
    e.preventDefault();

    // Establecer la configuración de la solicitud al backend
    const configuration = {
      method: "post",
      url: "http://localhost:5000/api/v1/usuarios/register",
      data: {
        correo_electronico,
        contrasena,
      },
    };

    // Realizar la llamada a la API usando axios
    axios(configuration)
      .then((result) => {
        setRegister(true);
        // Redirige al usuario a la página principal del usuario
        window.location.href = "/registro-formulario";
      })
      .catch((error) => {
        error = new Error();
      });
  }

  return (
    <div className="  h-full bg-public scroll-auto" >
      <Navbar_WelcomePage />


      <div id="hero" className=" mx-auto grid md:grid-cols-2 items-center  pt-1000">
        <video id="video-hero" src={videoBG} autoPlay loop muted></video>


        <div id="hero-eslogan" className="ml-0 col-span-1">
          <h1 id="hero-h1" className=" text-center font-bold text-5xl text-white mt-6" >¡Recicla, gana premios y salva el planeta con nuestra app!</h1>
          <h2 id="hero-h2" className=" text-center font-bold text-2xl mt-6 text-white">Únete a la revolución verde, ¡hazte eco-héroe!<br />Construye un futuro mejor.</h2>
          {/* <img className="w-2/3 md:h-1/3 py-5 hover:scale-105 ease-in duration-300 " src="bolsa_basura.png" /> */}
        </div>

        {/* Formulario */}
        <form id="formulario-registro" className="ml-4 mr-4  col-span-1 bg-white p-4 rounded-md "
          onSubmit={handleSubmit}>
          <div id="Registro" className="">
            <label className="block text-black uppercase font-bold">
              Correo Electronico
            </label>
            <input
              id="email"
              type="email"
              name="correo_electronico"
              value={correo_electronico}
              onChange={e => setEmail(e.target.value)}
              className=" mb-5 border-2 w-full p-2 mt-2  placeholder-gray-400 border-  rounded-md"
              placeholder="Correo Electronico"></input>
          </div>
          <div className="">
            <label className="block text-black uppercase font-bold">
              Contraseña
            </label>
            <input
              id="password"
              type="password"
              name="contrasena"
              value={contrasena}
              onChange={e => setPassWord(e.target.value)}
              className=" mb-5 border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              placeholder="Contraseña"></input>
          </div>

          <button
            variant="primay"
            type="submit"
            className=" py-2 px-2 bg-emerald-800 w-full p-3 text-white uppercase font-bold rounded-md hover:scale-105 cursor-pointer"
            onClick={(e) => handleSubmit(e)}
          >
            ¡Regístrate y recicla!
          </button>
        </form>
      </div  >

      {/* Informacion */}
      <div id='Por_que_proyecto' className=" border-solid border border-black w-1/2 items-center mx-auto mb-10" ></div>
      <div id="about-project" className="  mb-2"
      >
        <h1 className=" text-center items-center text-4xl py-5 font-bold">EcoPoints: un aliado para un futuro sostenible</h1>
        <p className="text-center items-center text-lg mx-auto py-5">¿Sabían que el reciclaje es una de las piezas clave para construir un futuro más sostenible con el medio ambiente?</p>
        <p className="text-center items-center text-lg mx-auto py-5 italic"> <b>EcoPoints</b> es una innovadora aplicación que está revolucionando la forma en que reciclamos en <b>Cataluña</b> y <b>España</b>.</p>
      </div>
      {/* Graficos  */}
      <div className="Grafico">
        <div className=" mx-auto items-center  rounded-md " >
          <h2 className=" text-center items-center text-4xl mb-10  mt-5 py-5 font-bold ">Evolución Reciclaje España</h2>
          <GraficaEsp />
        </div>

        <div className="  mx-auto items-center  rounded-md " >
          <h2 className="text-center items-center text-4xl mb-10  mt-5 py-5 font-bold ">Evolución Reciclaje Cataluña</h2>
          < GraficaCat />
        </div>

        <div className=" mx-auto items-center  rounded-md " >
          <h2 className="text-center items-center text-4xl
          mt-5 py-5 font-bold">Predicción % Residuos Selectivos</h2>
          <GraficaComp />
        </div>
      </div>

      <div className=" border-solid border border-black w-1/2 items-center mt-10 mx-auto mb-10"  ></div>
      <div>
        <p className="text-center items-center text-lg mx-auto py-5 ml-16 mr-16 "  >En <b>GreenTech</b> no nos conformamos con estos datos y para mejorar estas cifras y promover el reciclaje, GreenTech ha desarrollado
          una aplicación llamada <b>EcoPoints</b>, que busca incentivar y facilitar el proceso de reciclaje tanto en <b>España</b> como en <b>Cataluña</b>.
          Con iniciativas como EcoPoints, se espera que más personas se involucren en el reciclaje y se contribuya a alcanzar los ambiciosos
          objetivos de la <b>UE</b> para un futuro más sostenible y amigable con el medio ambiente. </p>
        <br />
      </div>

      <div className=" border-solid border border-black w-1/2 items-center mx-auto mb-10" id="Como_funciona" ></div>
      {/* Como Funciona */}
      <div>

        <h1 className=" text-center items-center text-4xl py-5 mb-16 font-bold">¿Cómo funciona?</h1>
        <div className="  mb-20 grid md:flex-auto md:grid-cols-6 rounded-md " >
          <div >
            <img className=" w-1/4 py-2 px-2 mx-auto mb-2 hover:scale-105 " src="ecological-house.png" />
            <p className="text-center text-xl mb-4 sm:text-xl ">Recicla en casa</p>
          </div>
          <div >
            <img className="w-1/4 py-2 px-2 mx-auto mb-2 hover:scale-105 " src="loupe.png" />
            <p className="text-center text-xl sm:text-xl ">Busca el contenedor <b>ECOPOINT</b> más cercano</p>
          </div>
          <div >
            <img className="w-1/4 py-2 px-2 mx-auto mb-2 hover:scale-105 " src="qr-code.png" />
            <p className="text-center text-xl sm:text-xl ">Escanea el código QR del contenedor</p>
          </div>
          <div >
            <img className="w-1/4 py-2 px-2 mx-auto mb-2 hover:scale-105 " src="contenedor-de-basura.png" />
            <p className="text-center text-xl sm:text-xl ">Deposita tu basura en el contenedor</p>
          </div>
          <div >
            <img className="w-1/4 py-2 px-2 mx-auto mb-2 hover:scale-105 " src="Coin_EcoPoints.png" />
            <p className="text-center text-xl sm:text-xl ">Acumula <b>ECOPOINTS</b></p>
          </div>
          <div >
            <img className="w-1/4 py-2 px-2 mx-auto mb-2 hover:scale-105 " src="gift.png" />
            <p className="text-center text-xl sm:text-xl  ">Desbloquea premios por reciclar</p>

          </div>
        </div>
      </div>

      <div className=" border-solid border border-black w-1/2 items-center mx-auto mb-10" id="sobre_nosotros"  ></div>

      {/* Sobre Nosotros */}
      <h1 className=" text-center items-center text-4xl py-5 mb-5 font-bold ">Un proyecto de GreenTech</h1>


      <div className="container mx-auto grid md:grid-cols-2 items-center  mb-40  rounded-md" >
        <div >
          <img id="img-empresa" src="gg.png" />
        </div>
        <p id="frase-greentech" className="col-span-1 text-center items-center text-base mx-auto  "><b>EcoPoints</b> es una iniciativa de <b>GreenTech</b>, una empresa IoT dedicada a la sostenibilidad, que premia
          tu responsabilidad medioambiental a través de un Sistema de Devolución y Recompensa. Cada vez que reciclas en nuestros contenedores de tu ciudad, recibes <b>EcoPoints</b>, que puedes canjear por premios.
          <br /> <br /> Nuestro enfoque combina la tecnología con el compromiso de construir un mundo más sostenible a través del reciclaje inteligente y accesible para todos.
          Con <b>EcoPoints</b> ganas tú y gana el medio ambiente, porque cada pequeña acción cuenta en la construcción de un mundo más verde y sostenible. Únete a la comunidad <b>EcoPoints</b> y sé parte
          del cambio hacia un futuro mejor.</p>

      </div>








      {/* Footer */}
      <footer className="  bg-green-500">
        <Chat />
        <div className="  grid md:grid-cols-4  ">
          <div className=" col-span-1 text-xl mb-8  lg:mr-7 text-center items-center "  >
            <h1 className="pt-4 col-span-1 text-sm mb-5 lg:mr-7 font-bold text-white">Sobre Nosotros</h1>
            <ul className="">
              <li>
                <a href='#' className=' col-span-1 text-sm mb-5  lg:mr-7 hover:text-black text-center text-white'>Quienes Somos</a>
              </li>
            </ul>
            <ul className="">
              <li>
                <a href='#' className=' col-span-1 text-sm mb-5  lg:mr-7 hover:text-black text-center text-white'>Blog</a>
              </li>

            </ul>

          </div>
          <div className=" col-span-1 text-xl mb-8 lg:mr-7 text-center items-center "  >
            <h1 className="pt-4 col-span-1 text-sm mb-5 lg:mr-7 font-bold text-white" >GreenTech</h1>
            <ul className=" ">
              <li>
                <a href='#' className=' col-span-1 text-sm mb-8 lg:mr-7 hover:text-black text-white'>Productos</a>
              </li>
            </ul>
          </div>
          <div className=" col-span-1 text-xl mb-8 lg:mr-7 text-center items-center "  >
            <h1 className="pt-4 col-span-1 text-sm mb-5 lg:mr-7 font-bold text-white"  >Ayuda y soporte</h1>
            <ul className="">
              <li>
                <a href='#' className=' col-span-1 text-sm mb-5  lg:mr-7 hover:text-black text-white'>Contacto</a>
              </li>
            </ul>
            <ul className="">
              <li>
                <a href='#' className=' col-span-1 text-sm mb-5  lg:mr-7 hover:text-black text-white'>Inicio</a>
              </li>
            </ul>
          </div>
          <div className=" col-span-1 text-xl mb-8  lg:mr-7 text-center items-center "  >
            <h1 className="pt-4 col-span-1 text-sm mb-5 lg:mr-7 font-bold text-white">Equipo</h1>


            <ul className="">
              <li>
                <a href={linkedInProfileUrlNestor} target="_blank" className=' col-span-1 text-sm mb-5 hover:text-black lg:mr-7  text-white'>FrontEnd: Nestor OLivera</a>
              </li>
            </ul>
            <ul className="">
              <li>
                <a href={linkedInProfileUrlDaniBenitez} target="_blank" className=' col-span-1 text-sm mb-5  lg:mr-7 hover:text-black text-white'>BackEnd: Daniel Benitez</a>
              </li>
            </ul>
            <ul className="">
              <li>
                <a href={linkedInProfileUrlDaniCasanova} target="_blank" className=' col-span-1 text-sm mb-5  lg:mr-7 hover:text-black text-white'>Data Science: Daniel Casanova</a>
              </li>
            </ul>



          </div>
        </div>
        <div>





          <p className="ml-5 text-center "> <b>© 2023 Greentech. Todos los derechos reservados.</b>
          </p>
        </div>

      </footer >

    </div >

  )

}




export default WelcomePage;