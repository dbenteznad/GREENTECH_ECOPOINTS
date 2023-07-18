const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuarios.controller.js');

// Ruta para registrar un nuevo usuario
router.post("/register", usuariosController.register);

// Ruta para realizar el login
router.post("/login", usuariosController.login);

// Rutas adicionales para obtener, actualizar y eliminar usuarios
router.get("/", usuariosController.findAll);
router.get("/:id", usuariosController.findById);
router.put("/:id", usuariosController.updateById);
router.delete("/:id", usuariosController.deleteById);

module.exports = router;
