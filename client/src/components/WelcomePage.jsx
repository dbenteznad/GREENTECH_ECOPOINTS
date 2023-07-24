import { useState } from "react";
import Navbar_WelcomePage from "./Navbar_WelcomePage";
import axios from "axios";
import '../styles/WelcomePages.css';
import GraficaEsp from "./graficas_esp"
import GraficaCat from "./GraficaCat"
import GraficaComp from "./graficas_comp"
// import Chatbot from "./chat";



function WelcomePage() {

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
      })
      .catch((error) => {
        error = new Error();
      });
  }

  return (
    <div className="  h-full bg-public scroll-auto" >
      <Navbar_WelcomePage />


      <div id="hero" className=" mx-auto grid md:grid-cols-2 items-center bg-green-500 pt-1000">

        <div id="hero-eslogan" className="ml-0 col-span-1">
          <h1 id="hero-h1" className=" text-center font-bold text-5xl text-white mt-6" >¡Recicla, gana premios y salva el planeta con nuestra app!</h1>
          <h2 id="hero-h2" className=" text-center font-bold text-2xl mt-6">Únete a la revolución verde, ¡hazte eco-héroe!<br />Construye un futuro mejor.</h2>
          <img className="w-2/3 md:h-1/3 py-5 hover:scale-105 ease-in duration-300 " src="bolsa_basura.png" />

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
        <h1 className=" text-center items-center text-6xl py-5 font-bold">Sabías que...?</h1>
        <p className="text-center items-center text-xl py-5">Optar por una app de gestión de residuos ofrece numerosos beneficios. En primer lugar, proporciona información precisa y actualizada sobre la separación y el manejo adecuado de los residuos, lo que ayuda a evitar errores y maximizar el reciclaje. Además, estas aplicaciones suelen ser intuitivas y fáciles de usar, lo que facilita su adopción por parte de los usuarios.
          Al utilizar una app de gestión de residuos, contribuimos activamente a cuidar el medio ambiente y promover prácticas sostenibles en nuestra comunidad.</p>
      </div>
      {/* Graficos  */}


      <div className="container mx-auto items-center  rounded-md " >
        <h2 className=" text-center items-center mx-auto text-5xl py-5  mb-10 mt-10 ">Evolución Reciclaje España</h2>
        <div >
          <GraficaEsp/>

        </div  >
      </div>

      <div  >

        <div >
          <h2 className=" text-center w-1/2 items-center text-5xl  mx-auto py-5 mb-10 mt-10 ">Evolución Reciclaje Cataluña</h2>
        </div>
        <div>

          <GraficaCat />


        </div>


      </div>

      <div className="container mx-auto items-center  rounded-md " >
      <h2 className=" text-center items-center text-5xl py-5 mb-10 mt-10 ">Predicción % Residuos Selectivos</h2>
        <div >
<GraficaComp/>
       
        </div>
      </div>
      <div className=" border-solid border border-black w-1/2 items-center mx-auto mb-10" id="Como_funciona" ></div>
      {/* Como Funciona */}
      <div>

        <h1 className=" text-center items-center text-6xl py-5 mb-20 font-bold">¿Cómo funciona?</h1>
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
      <h1 className=" text-center items-center text-6xl py-5 mb-5 font-bold ">Un proyecto de GreenTech</h1>


      <div className="container mx-auto grid md:grid-cols-2 items-center  mb-40  rounded-md" >
        <div >
          <img id="img-empresa" src="Empresa.png" />
        </div>
        <p id="frase-greentech" className="col-span-1  text-right items-center"><b>EcoPoints</b> es una iniciativa de <b>GreenTech</b>, una empresa IoT dedicada a la sostenibilidad, que premia
          tu responsabilidad medioambiental a través de un Sistema de Devolución y Recompensa. Cada vez que reciclas en nuestros contenedores de tu ciudad, recibes <b>EcoPoints</b>, que puedes canjear por premios.
          <br /> <br /> Nuestro enfoque combina la tecnología con el compromiso de construir un mundo más sostenible a través del reciclaje inteligente y accesible para todos.
          Con <b>EcoPoints</b> ganas tú y gana el medio ambiente, porque cada pequeña acción cuenta en la construcción de un mundo más verde y sostenible. Únete a la comunidad <b>EcoPoints</b> y sé parte
          del cambio hacia un futuro mejor.</p>

      </div>

{/* <Chatbot/> */}

      {/* Footer */}
      <footer className="  bg-green-500">
        <div className="  grid md:grid-cols-3  ">
          <div className=" col-span-1 text-xl mb-8  lg:mr-7 text-center items-center "  >
            <h1 className="pt-4 col-span-1 text-xl mb-8 lg:mr-7 font-bold text-white">Sobre Nosotros</h1>
            <ul className="">
              <li>
                <a href='#' className=' col-span-1 text-xl mb-8  lg:mr-7 hover:text-black text-center text-white'>Quienes Somos</a>
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

    </div >

  )

}




export default WelcomePage;