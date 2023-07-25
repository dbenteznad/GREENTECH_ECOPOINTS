import { useState } from "react";
import { Switch, Route } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import Home from "./components/Home";
import Premios from "./components/Premios";
import Formulario from "./components/Registro_Formulario";
import Login from "./components/Login";
import Registro from "./components/Registro";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Prediccion_Home from "../src/partials/Prediccion_Home"
import Prediccion_WelcomePage from "../src/partials/Prediccion_WelcomePage";


function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={WelcomePage} />
        <Route exact path="/registro" component={Registro} />
        <Route exact path="/registro-formulario" component={Formulario} />
        <Route exact path="/login" component={Login} />
        {/* <ProtectedRoutes path="/home" component={Home} />
           */}
        <Route exact path="/Prediccion_Home" component={Prediccion_Home} />
        <Route exact path="/Prediccion_WelcomePage" component={Prediccion_WelcomePage} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/premios" component={Premios} />
      </Switch>
    </>
  );
};

export default App;
