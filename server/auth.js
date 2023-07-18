const jwt = require("jsonwebtoken");

module.exports = async (request, response, next) => {
  try {
    // Obtener el token del encabezado de autorización
    const token = await request.headers.authorization.split(" ")[1];

    // Comprobar si el token coincide con el supuesto origen
    const decodedToken = await jwt.verify(token, "RANDOM-TOKEN");

    // Comprobar si el token coincide con el supuesto origen
    const user = await decodedToken;

    // Pasar al usuario a los puntos finales aquí
    request.user = user;

    // Pasar la funcionalidad al punto final
    next();
    
  } catch (error) {
    response.status(401).json({
      error: new Error("¡Petición invalida!"),
    });
  }
};