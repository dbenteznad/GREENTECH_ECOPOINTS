import NavBar_Home from "./NavBar_Home";
import '../styles/Home.css'
import axios from "axios";
import Cookies from "universal-cookie";
import Grafica_Semanal from "./Grafica_Semanal";
import Grafica_Mensual from "./Grafica_Mensuales";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const phrases = [
  "Reciclar es la oportunidad de transformar el pasado en un futuro sostenible.",
  "El reciclaje es un pequeño gesto que deja una gran huella en el planeta.",
  "Cuida la Tierra, es el único hogar que tenemos.",
  "El medio ambiente no es una herencia de nuestros padres, sino un préstamo de nuestros hijos.",
  "Piensa globalmente, recicla localmente.",
  "Reciclar es como darle un abrazo al planeta.",
  "La naturaleza no necesita que la rescatemos, necesita que dejemos de dañarla.",
  "El reciclaje es una invitación a ser parte del cambio que queremos ver en el mundo.",
  "El futuro sostenible está en nuestras manos y en nuestras acciones de reciclaje.",
  "Reduce, reutiliza, recicla: las tres claves para proteger nuestro entorno.",
  "El reciclaje es una actitud que se contagia y multiplica cuando todos participamos.",
  "El respeto por la naturaleza comienza con pequeños gestos de reciclaje.",
  "No hay un planeta B, cuidemos el planeta que tenemos.",
  "La basura de hoy es el problema de mañana, reciclar es prevenir.",
  "Cada envase que reciclas es una oportunidad para marcar la diferencia.",
  "Cada kilogramo de papel reciclado evita la tala de aproximadamente 17 árboles.",
  "Reciclar una tonelada de plástico puede ahorrar hasta 5,774 litros de petróleo.",
  "Por cada tonelada de aluminio reciclado, se ahorra la energía equivalente a 20,000 litros de gasolina.",
  "El reciclaje de vidrio reduce las emisiones de dióxido de carbono en un 20% y ahorra suficiente energía para mantener un televisor encendido durante 3 horas.",
  "Cada botella de vidrio reciclada ahorra suficiente energía para encender una bombilla durante 4 horas.",
  "Reciclar una lata de aluminio ahorra suficiente energía para mantener un televisor funcionando durante 3 horas.",
  "El reciclaje de papel puede reducir las emisiones de gases de efecto invernadero en un 75%.",
  "El reciclaje de una tonelada de plástico evita la emisión de 2,5 toneladas de dióxido de carbono.",
  "El reciclaje de una botella de plástico ahorra suficiente energía para alimentar un ordenador durante 25 minutos.",
  "Cada kilogramo de acero reciclado ahorra 1,130 litros de agua y 1,400 kilogramos de mineral de hierro."
];

const cookies = new Cookies();


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

        </div>
        {/* <a href='Premios' className='text-black uppercase text-left mx-auto hover:text-blue-600 lg:mr-7 mb-8 lg:mb-0'>Ver Mas</a> */}
      </div>
      <div className=" container mx-auto grid md:grid-cols-3">

        <div className="py-5 col-span-1 rounded-lg mr-4 mb-6  hover:scale-110 bg-green-500" >
          {/* premio1 */}
          <h1 className="text-center text-lg mb-2 "><b>Premio 1</b></h1>
          <img className=" h-2/3 mx-auto rounded-xl" src="premio1.png" />
          <h1 className="text-center"><b>Puntos:</b></h1>
          <h1 className="text-center">1000</h1>

        </div>
        {/* premio2 */}
        <div className=" py-5 col-span-1 rounded-lg  mr-4 mb-6 hover:scale-110  bg-green-500" >
          <h1 className="text-center text-lg mb-2 " ><b>Premio 2</b></h1>
          <img className=" h-2/3 mx-auto rounded-xl" src="premio2.jpg" />
          <h1 className="text-center"><b>Puntos:</b></h1>
          <h1 className="text-center">2000</h1>
        </div>
        {/* Premio3 */}
        <div className="py-5 col-span-1 rounded-md hover:scale-110    mr-4 mb-6 bg-green-500" >

          <h1 className="text-center text-lg mb-2 "><b>Premio 3</b></h1>
          <img className=" h-2/3 mx-auto rounded-xl" src="premio3.jpg" />
          <h1 className="text-center"><b>Puntos:</b></h1>
          <h1 className="text-center">3000</h1>
        </div>

      </div >
      <a href="Premios" className="hover:text-blue-600 text-lg flex flex-row-reverse mr-12 ">Ver Mas</a>
      <div className=" border-solid border border-black w-1/2 items-center mx-auto mb-10" ></div>
      <h1 className="text-center mt-25 items-center text-7xl py-5 font-mono mb-5 ">Sabias que?</h1>
      
        <div className="App  border-solid text-2xl bg-green-500 italic rounded-3xl p-5">
        <Carousel showThumbs={false}>
          {phrases.map((phrase, index) => (
            <div key={index}>
              <p>{phrase}</p>
            </div>
          ))}
        </Carousel>
      </div>
      <div className=" border-solid border border-black w-1/2 items-center mx-auto mt-10 mb-10" ></div>

      <h1 className="text-center mt-25 items-center text-7xl py-5 font-mono mb-5 ">Estadisticas</h1>
      

      <div className="bg-gradient-to-r from-green-700 from-10% via-green-500 via-30% to-emerald-500 to-90% mb-2">

      </div>



      <div className=" container mx-auto grid md:grid-cols-2">



        <div className=" col-span-1 rounded-lg   font-mono" >
          <h1 className="text-center text-lg mb-10">Semanal</h1>
          <Grafica_Semanal />
        </div>
        <div className=" col-span-1 rounded-lg    font-mono" >
          <h1 className="text-center text-lg mb-10">Mensual</h1>
          <Grafica_Mensual />
        </div>



      </div>


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








    </>





  )

}
export default Home;