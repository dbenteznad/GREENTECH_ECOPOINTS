import { useState } from "react";
import { Switch, Route } from "react-router-dom";
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
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Registro" component={Registro} />
          <Route exact path="/Login"  component={Login}/>
          <ProtectedRoutes path="/Sesion" component={Sesion} />
          <Route exact path="/Prueba" component={Prueba} />
          <Route exact path="/Blog" component={Blog} />
          {/* <Route path="/Sesion" element={<Sesion/>}/> */}
          <Route exact path="/Premios" component={Premios}/>
          <Route exact path="/Foro" component={Foro}/>
          <Route exact path="/Mapa" component={Mapa}/>
          <Route exact path="/Formulario" component={Formulario}/>
          <Route exact path="/Perfil" component={Perfil}/>
          
        </Switch>
    </>
  );
};

export default App;
