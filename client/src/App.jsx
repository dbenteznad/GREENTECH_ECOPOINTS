import { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Sesion from "./components/Sesion";
import Premios from "./components/Premios";
import Formulario from "./components/Formulario";
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
          <Route exact path="/Premios" component={Premios}/>
          <Route exact path="/Formulario" component={Formulario}/>       
        </Switch>
    </>
  );
};

export default App;
