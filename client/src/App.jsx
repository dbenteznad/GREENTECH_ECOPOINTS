import { useState } from "react";
import { Switch, Route } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import Home from "./components/Home";
import Premios from "./components/Premios";
import Formulario from "./components/Registro_Formulario";
import Login from "./components/Login";
import Registro from "./components/Registro";
import Prueba from "./components/Prueba";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Prediccion from "./components/Prediccion";

function App() { 
  return (
    <>
        <Switch>
          <Route exact path="/" component={WelcomePage} />
          <Route exact path="/registro" component={Registro} />
          <Route exact path="/registro-formulario" component={Formulario}/>  
          <Route exact path="/login"  component={Login}/>
          <ProtectedRoutes path="/home" component={Home} />
          <Route exact path="/prueba" component={Prueba} />
          <Route exact path="/premios" component={Premios}/>
          <Route exact path="/prediccion" component={Prediccion}/>
        </Switch>
    </>
  );
};

export default App;
