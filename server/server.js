const express = require('express');
const bodyParser = require('body-parser');
const auth = require("./auth");

// Crear la app con Express.js 
const app = express();

// Setup server port 
const port = process.env.PORT || 5000;

// Curb Cores Error agregando un encabezado aquí
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, PATCH, OPTIONS"
    );
    next();
  });

// Configurar body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Definir la ruta de origen
app.get('/', (req, res) => {
    res.send("Hello World");
});

// Configurar las rutas
const usuariosRoutes = require("./routes/usuarios.routes.js");

// Utilizando el enrutador como middleware
app.use('/api/v1/usuarios', usuariosRoutes);

// Endpoint libre
app.get("/free-endpoint", (request, response) => {
    response.json({ message: "Eres libre de acceder a mí en cualquier momento" });
});

// Endpoint de autentificación protegido por el middleware auth
app.use("/auth-endpoint", auth, (request, response) => {
    response.json({ message: "Estás autorizado para acceder" });
});

// Escuchando las peticiones 
app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});

module.exports = app;

