import { useState } from "react";
import { Routes, Router, Route } from "react-router-dom";
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
import ProtectedRoutes from "./components/ProtectedRoutes";

function App() { 
  return (
    <>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/Registro" element={<Registro />} />
          <Route path="/Login"  element={<Login/>}/>
          <ProtectedRoutes path="Sesion" element={<Sesion />} />
          <Route path="/Prueba" element={<Prueba />} />
          <Route path="/Blog" element={<Blog />} />
          {/* <Route path="/Sesion" element={<Sesion/>}/> */}
          <Route path="/Premios" element={<Premios/>}/>
          <Route path="/Foro" element={<Foro/>}/>
          <Route path="/Mapa" element={<Mapa/>}/>
          <Route path="/Formulario" element={<Formulario/>}/>
          <Route path="/Perfil" element={<Perfil/>}/>
          
        </Routes>
    </>
  );
};

export default App;
