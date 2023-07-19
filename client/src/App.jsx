import { useState } from "react";
import { BrowserRouter, Routes, Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Sesion from "./components/Sesion";
import Premios from "./components/Premios";
import Foro from "./components/Foro";
import Mapa from "./components/Mapa";
import Formulario from "./components/Formulario";
import Perfil from "./components/Perfil";
import Login from "./components/Login";
import Registro from "./components/Registro";
import Prueba from "./components/Prueba";

function App() { 
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/Prueba" element={<Prueba />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Sesion" element={<Sesion/>}/>
          <Route path="/Premios" element={<Premios/>}/>
          <Route path="/Foro" element={<Foro/>}/>
          <Route path="/Mapa" element={<Mapa/>}/>
          <Route path="/Formulario" element={<Formulario/>}/>
           <Route path="/Registro" element={<Registro/>}/>
          <Route path="/Perfil" element={<Perfil/>}/>
          <Route path="/Login"  element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
