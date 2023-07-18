import { useState } from "react";
import Navbar from "./Navbar";




function Home() {

  const [email, setEmail] = useState("");
  const [password, setPassWord] = useState("");
  const [login, setLogin] = useState(false);

  const handleSubmit = (e) => {
    // Evitar que el formulario actualice toda la página
    e.preventDefault();
    // Crear una alerta emergente que muestre el texto "enviado"
    alert("Enviado");
  }

  return (
    <div className="  h-full bg-public scroll-auto" >
      <Navbar />
      <div className=" mx-auto grid md:grid-cols-2 items-center bg-green-500">

        <div className="ml-0 col-span-1 ">
          <h2 className=" text-center font-bold text-6xl text-white mt-6">¡Descarga nuestra app!</h2>
          <h2 className=" text-center font-bold text-6xl text-white mt-6">Sé un héroe verde y desbloquea premios mientras salvas al planeta.</h2>
          <img className="h-1/2 md:h-1/3 py-5 " src="bolsa_basura.png" />
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
              name="email"
              value={email}
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
              name="password"
              value={password}
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
          {/* <input
            type="submit"
            className=" py-2 px-2 bg-green-700 w-full p-3 text-white uppercase font-bold rounded-md hover:scale-105 cursor-pointer" /> */}
        </form>
      </div  >

      {/* Informacion */}
      <div className="  mb-2"
        id='Por_que_proyecto'>
        <h1 className=" text-center items-center text-7xl py-5 font-mono mb-10 mt-10 ">Sabias Que</h1>
        <p className="text-center items-center text-xl py-5 font-mono">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus eum vitae, deleniti ut illo esse et perspiciatis
          tempore voluptatibus aspernatur ratione corrupti itaque corporis temporibus sapiente laudantium fugit ea dicta cum. Atque consequuntur
          nostrum doloremque aliquid nulla vitae repudiandae explicabo acfqwecewvwrgqrgvrqegqregqr</p>
      </div>
      {/* Graficos  */}
      <div className="container mx-auto items-center hover:bg-green-400 rounded-md " >
        <div >
          <img className="  mx-auto py-5 px-5 " src="grafico_Cataluña.jpeg" />

        </div>

      </div>
      <div className="container mx-auto items-center hover:bg-green-400 rounded-md " >
        <div >
          <img className="  mx-auto py-5 px-5 " src="grafico_España.jpeg" />

        </div>

      </div>



      <div className="container mx-auto items-center  bg-green-500 rounded-md " >
        <div >

          <img className=" mb-20 mx-auto py-5 px-5 " src="Grafico.jpeg" />

        </div>

      </div>
      <div className=" border-solid border border-black w-1/2 items-center mx-auto mb-10" ></div>
      {/* Como Funciona */}
      <div>
        <h1 id="Como_funciona" className="text-center items-center text-7xl py-5 font-mono mb-20">Como Funciona</h1>

        <div className="  mb-20 grid md:grid-cols-6 rounded-md " >
          <div >
            <img className=" w-1/3 py-2 px-2 mx-auto mb-2 " src="ecological-house.png" />
            <p className="text-center text-xl mb-4 sm:text-xl font-mono font-bold">Recicla</p>
          </div>
          <div >
            <img className="w-1/3 py-2 px-2 mx-auto mb-2" src="loupe.png" />
            <p className="text-center text-xl sm:text-xl font-mono font-bold">Busca tu Contenedor EcoPoint mas Cercano</p>
          </div>
          <div >
            <img className="w-1/3 py-2 px-2 mx-auto mb-2" src="qr-code.png" />
            <p className="text-center text-xl sm:text-xl font-mono font-bold">Escanea el Qr</p>
          </div>
          <div >
            <img className="w-1/3 py-2 px-2 mx-auto mb-2" src="contenedor-de-basura.png" />
            <p className="text-center text-xl sm:text-xl font-mono font-bold">Tira La basura reciclada en el contenedor EcoPont</p>
          </div>
          <div >
            <img className="w-1/3 py-2 px-2 mx-auto mb-2 " src="Coin_EcoPoints.png" />
            <p className="text-center text-xl sm:text-xl font-mono font-bold">Gana Puntos</p>
          </div>
          <div >
            <img className="w-1/3 py-2 px-2 mx-auto mb-2" src="gift.png" />
            <p className="text-center text-xl sm:text-xl font-mono font-bold ">Recibe tu recompensa por reciclar</p>

          </div>
        </div>
      </div>

      <div className=" border-solid border border-black w-1/2 items-center mx-auto mb-10" ></div>

      {/* Sobre Nosotros */}
      <h1 id="sobre_nosotros" className="text-center items-center text-7xl py-5 font-mono mb-10">Sobre Nosotros</h1>

      <div className="container mx-auto grid md:grid-cols-2 items-center  mb-40 hover:bg-green-400 rounded-md" >
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