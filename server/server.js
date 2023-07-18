const express = require('express');
const bodyParser = require('body-parser');

// Crear la app con Express.js 
const app = express();

// Setup server port 
const port = process.env.PORT || 5000;

// Configurar body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Definir la ruta de origen
app.get('/', (req, res) => {
    res.send("Hello World");
});

// Configurar las rutas
const usuariosRoutes = require("./routes/usuarios.routes.js");
const registerRoutes = require('./routes/register.routes.js');

// Utilizando el enrutador como middleware
app.use('/api/v1/usuarios', usuariosRoutes);
app.use('/api/v1/register', registerRoutes);

// Escuchando las peticiones 
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

module.exports = app;
