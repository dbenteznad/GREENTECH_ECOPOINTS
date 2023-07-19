import React from "react";
import { Route, Redirect } from "react-router-dom";
import Cookies from "universal-cookie";
const cookies = new Cookies();

// recibe el componente y cualquier otra prop representada por...rest
export default function ProtectedRoutes({ component: Component, ...rest }) {
  return (

    // Esta ruta toma otras rutas asignadas a ella desde App.js y devuelve la misma ruta si se cumple la condición
    <Route
      {...rest}
      render={(props) => {
        // Obtener una cookie del navegador si inició sesión
        const token = cookies.get("TOKEN");

        // Devuelve la ruta si hay un token válido establecido en la cookie
        if (token) {
          return <Component {...props} />;
        } else {
          // Devolver al usuario a la página de destino si no hay un conjunto de tokens válido
          return (
            <Redirect
              to={{
                pathname: "/",
                state: {
                  // Establece la ubicación a la que un usuario estaba a punto de acceder antes de ser redirigido para iniciar sesión
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
}