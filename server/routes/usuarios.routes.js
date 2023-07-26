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
router.put("/:email", usuariosController.updateUserByEmail);
router.delete("/:id", usuariosController.deleteById);
router.get('/gender-distribution', usuariosController.getGenderDistribution);

module.exports = router;
