const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuarios.controller.js');

// Ruta para registrar un nuevo usuario
router.post("/register", usuariosController.register);

// Ruta para realizar el login
router.post("/login", usuariosController.login);

// Ruta para obtener la distribución de género
router.get('/gender', usuariosController.getGenderDistribution);

// Ruta para obtener la información de los contenedores de basura y la distribución de género y reciclaje
router.get('/recycling', usuariosController.getGenderAndRecyclingDistribution);

// Rutas adicionales para obtener, actualizar y eliminar usuarios
router.get("/", usuariosController.findAll);
router.get("/:id", usuariosController.findById);
router.put("/:email", usuariosController.updateUserByEmail);
router.delete("/:id", usuariosController.deleteById);

module.exports = router;
