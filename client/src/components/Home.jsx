import { useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";




function Home() {

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
      <Navbar />
      <div className=" mx-auto grid md:grid-cols-1 items-center bg-green-500">
        <h1 className=" text-center font-bold text-5xl text-white mt-6" >¡Descarga nuestra app!</h1></div>
      <div className=" mx-auto grid md:grid-cols-2 items-center bg-green-500">

        <div className="ml-0 col-span-1 ">
          <h2 className=" text-center font-bold text-6xl text-white mt-6">Sé un héroe verde y desbloquea premios mientras salvas al planeta.</h2>
          <img className="h-1/3 md:h-1/3 py-5 hover:scale-105 ease-in duration-300 " src="bolsa_basura.png" />

        </div>

        {/* Formulario */}
        <form className="ml-0 col-span-1 bg-white p-4 mr-8 rounded-md"
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
            className=" py-2 px-2 bg-green-700 w-full p-3 text-white uppercase font-bold rounded-md hover:scale-105 cursor-pointer"
            onClick={(e) => handleSubmit(e)}
          >
            ¡Regístrate y recicla!
          </button>
        </form>
      </div  >

      {/* Informacion */}
      <div className=" border-solid border border-black w-1/2 items-center mx-auto mb-10 mt-10" id='Por_que_proyecto' ></div>
      <div className="  mb-2"
      >
        <h1 className=" text-center items-center text-8xl py-5 font-mono mb-10 mt-10 ">¡Sabias Qué!</h1>
        <p className="text-center items-center text-xl py-5 font-mono">Optar por una app de gestión de residuos ofrece numerosos beneficios. En primer lugar, proporciona información precisa y actualizada sobre la separación y el manejo adecuado de los residuos, lo que ayuda a evitar errores y maximizar el reciclaje. Además, estas aplicaciones suelen ser intuitivas y fáciles de usar, lo que facilita su adopción por parte de los usuarios.
          Al utilizar una app de gestión de residuos, contribuimos activamente a cuidar el medio ambiente y promover prácticas sostenibles en nuestra comunidad.</p>
      </div>
      {/* Graficos  */}
      <div className="container mx-auto items-center  rounded-md " >
        <div >
        <h2 className=" text-center items-center text-5xl py-5 font-mono mb-10 mt-10 ">Evolución Reciclaje España</h2>
        </div  >
        

        

      </div>
      <div className="container mx-auto items-center col rounded-md " >
        <div >
        <h2 className=" text-center items-center text-5xl py-5 font-mono mb-10 mt-10 ">Evolución Reciclaje Cataluña</h2>
        </div>
      </div>
      <div className="container mx-auto items-center  rounded-md " >
        <div >

        <h2 className=" text-center items-center text-5xl py-5 font-mono mb-10 mt-10 ">Predicción % Residuos Selectivos</h2>
        </div>
      </div>
      <div className=" border-solid border border-black w-1/2 items-center mx-auto mb-10" id="Como_funciona" ></div>
      {/* Como Funciona */}
      <div>
        <h1 className="text-center items-center text-9xl py-5 font-mono mb-20">Como Funciona</h1>

        <div className="  mb-20 grid md:grid-cols-6 rounded-md " >
          <div >
            <img className=" w-1/3 py-2 px-2 mx-auto mb-2 hover:scale-105 " src="ecological-house.png" />
            <p className="text-center text-xl mb-4 sm:text-xl font-mono font-bold">Recicla</p>
          </div>
          <div >
            <img className="w-1/3 py-2 px-2 mx-auto mb-2 hover:scale-105 " src="loupe.png" />
            <p className="text-center text-xl sm:text-xl font-mono font-bold">Busca tu Contenedor EcoPoint mas Cercano</p>
          </div>
          <div >
            <img className="w-1/3 py-2 px-2 mx-auto mb-2 hover:scale-105 " src="qr-code.png" />
            <p className="text-center text-xl sm:text-xl font-mono font-bold">Escanea el Qr</p>
          </div>
          <div >
            <img className="w-1/3 py-2 px-2 mx-auto mb-2 hover:scale-105 " src="contenedor-de-basura.png" />
            <p className="text-center text-xl sm:text-xl font-mono font-bold">Tira La basura reciclada en el contenedor EcoPont</p>
          </div>
          <div >
            <img className="w-1/3 py-2 px-2 mx-auto mb-2 hover:scale-105 " src="Coin_EcoPoints.png" />
            <p className="text-center text-xl sm:text-xl font-mono font-bold">Gana Puntos</p>
          </div>
          <div >
            <img className="w-1/3 py-2 px-2 mx-auto mb-2 hover:scale-105 " src="gift.png" />
            <p className="text-center text-xl sm:text-xl font-mono font-bold ">Recibe tu recompensa por reciclar</p>

          </div>
        </div>
      </div>

      <div className=" border-solid border border-black w-1/2 items-center mx-auto mb-10" id="sobre_nosotros"  ></div>

      {/* Sobre Nosotros */}
      <h1 className="text-center items-center text-9xl py-5 font-mono mb-10">Sobre Nosotros</h1>

      <div className="container mx-auto grid md:grid-cols-2 items-center  mb-40  rounded-md" >
        <div >
          <img className="h-1/2 py-2 px-2 " src="Empresa.jpeg" />
        </div>
        <p className="col-span-1  text-center items-center">En GreenTech, abrazamos el potencial transformador de la tecnología en el ámbito del reciclaje. Utilizamos soluciones innovadoras para optimizar los procesos, mejorar la eficiencia y fomentar la participación activa en la conservación del medio ambiente. Nuestro enfoque combina la tecnología con el compromiso de construir un mundo más sostenible a través del reciclaje inteligente y
          accesible para todos.</p>
      </div>








      {/* Footer */}
      <footer className="  bg-green-500">
        <div className="  grid md:grid-cols-3  ">
          <div className=" col-span-1 text-xl mb-8  lg:mr-7 text-center items-center "  >
            <h1 className="py-4">Sobre Nosotros</h1>
            <ul className="">
              <li>
                <a href='#' className=' text-center col-span-1 text-xl mb-8  lg:mr-7 hover:text-white'>Quienes Somos</a>
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
                <a href='#' className=' col-span-1 text-xl mb-8  lg:mr-7 hover:text-white'>Contacto</a>
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
     
    </div >
    
  )
  
}




export default Home;