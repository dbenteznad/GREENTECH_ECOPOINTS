const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');


// Register endpoint
router.post("/", (request, response) => {
    // Hashear la contraseña
    bcrypt
      .hash(request.body.password, 10)
      .then((hashedPassword) => {
        // Importar el modelo de Usuario después de que se haya definido en usuarios.model.js
        const Usuario = require('../models/usuarios.model.js');

        // Crear una nueva instancia y recopilar los datos
        const user = new Usuario({
          correo_electronico: request.body.correo_electronico,
          contrasena: hashedPassword,
        });
  
        // Guardar el nuevo usuario
        user
          .save()
          // Devolver si el nuevo usuario se agrega a la base de datos con éxito
          .then((result) => {
            response.status(201).send({
              message: "Usuario creado correctamente",
              result,
            });
          })
          // Error si el nuevo usuario no se agregó correctamente a la base de datos
          .catch((error) => {
            response.status(500).send({
              message: "Error al crear el usuario",
              error,
            });
          });
      })
      // Error de captura si el hash de contraseña no es exitoso
      .catch((error) => {
        response.status(500).send({
          message: "La contraseña no se ha cifrado con éxito",
          error,
        });
      });
  });

// Exportar el enrutador
module.exports = router;
