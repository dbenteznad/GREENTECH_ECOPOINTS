import NavBar_sesion from "./NavBar_Home";
import Chat from "../partials/ChatBot";

function Premios() {

  const linkedInProfileUrlNestor = 'https://www.linkedin.com/in/néstorolivera';
  const linkedInProfileUrlDaniCasanova = 'https://www.linkedin.com/in/daniel-ben%C3%ADtez-nadal-85388126b/';
  const linkedInProfileUrlDaniBenitez = 'https://www.linkedin.com/in/danicf/';

    return (


        <>
            <NavBar_sesion />


            <div className=" container mx-auto grid md:grid-cols-3 mt-10 mb-10">


                {/* premio1 */}

                <div className="py-5 col-span-1 rounded-lg hover:scale-110  mr-4 mb-6  bg-emerald-500" >

                    <h1 className="text-center text-lg mb-2 font-bold">Premio 1</h1>
                    <img className=" h-2/3 mx-auto rounded-xl" src="premio1.png" />
                    <h1 className="text-center font-bold">Puntos:</h1>
                    <h1 className="text-center">1000</h1>

                </div>
                {/* premio2 */}
                <div className=" py-5 col-span-1 rounded-lg hover:scale-110  mr-4 mb-6  bg-emerald-500" >
                    <h1 className="text-center text-lg mb-2 font-bold" >Premio 2</h1>
                    <img className=" h-2/3 mx-auto rounded-xl" src="premio2.jpg" />
                    <h1 className="text-center font-bold">Puntos:</h1>
                    <h1 className="text-center">2000</h1>

                </div>
                {/* Premio3 */}
                <div className="py-5 col-span-1 rounded-lg  hover:scale-110  mr-4 mb-6 bg-emerald-500" >

                    <h1 className="text-center text-lg mb-2 font-bold">Premio 3</h1>
                    <img className=" h-2/3 mx-auto rounded-xl" src="premio3.jpg" />
                    <h1 className="text-center font-bold">Puntos:</h1>
                    <h1 className="text-center">3000</h1>
                </div>



                {/* premio4 */}
                <div className="py-5  col-span-1 rounded-lg hover:scale-110   mr-4 mb-6 bg-emerald-500" >

                    <h1 className="text-center text-lg mb-2  font-bold">Premio 4</h1>
                    <img className="h-2/3 mx-auto rounded-xl " src="premio4.jpg" />
                    <h1 className="text-center font-bold">Puntos:</h1>
                    <h1 className="text-center">4000</h1>

                </div>
                {/* premio5 */}
                <div className=" py-5 col-span-1 rounded-lg hover:scale-110  mr-4 mb-6 bg-emerald-500" >
                    <h1 className="text-center text-lg mb-2 font-bold" >Premio 5</h1>
                    <img className="h-2/3 mx-auto rounded-xl" src="premio5.jpg" />
                    <h1 className="text-center font-bold">Puntos:</h1>
                    <h1 className="text-center">5000</h1>

                </div>
                {/* premio6 */}
                <div className="py-5 col-span-1 rounded-lg  hover:scale-110  mr-4 mb-6 bg-emerald-500" >

                    <h1 className="text-center text-lg mb-2 font-bold">Premio 6</h1>
                    <img className=" h-2/3 mx-auto rounded-xl" src="premio6.png" />
                    <h1 className="text-center font-bold">Puntos:</h1>
                    <h1 className="text-center">6000</h1>
                </div>
               
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
                <a href={linkedInProfileUrlNestor}  target="_blank" className=' col-span-1 text-sm mb-5 hover:text-black lg:mr-7  text-white'>FrontEnd: Nestor OLivera</a>
              </li>
            </ul>
            <ul className="">
              <li>
                <a href={linkedInProfileUrlDaniBenitez} target="_blank"  className=' col-span-1 text-sm mb-5  lg:mr-7 hover:text-black text-white'>BackEnd: Daniel Benitez</a>
              </li>
            </ul>
            <ul className="">
              <li>
                <a href={linkedInProfileUrlDaniCasanova} target="_blank"  className=' col-span-1 text-sm mb-5  lg:mr-7 hover:text-black text-white'>Data Science: Daniel Casanova</a>
              </li>
            </ul>
             
              
              
            </div>
        </div>
        <div>
          
            
         


          <p className="ml-5 text-center "> <b>© 2023 Greentech. Todos los derechos reservados.</b>
          </p>
        </div>

      </footer >










        </>


    )






}

export default Premios;