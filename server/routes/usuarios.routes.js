const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuarios.controller.js');

// Recuperar a todos los usuarios
router.get('/', usuariosController.findAll); 
// Crear un nuevo usuario 
router.post('/register', usuariosController.create); 
// Recuperar a un usuario por su id 
router.get('/:id', usuariosController.findById); 
// Modificar un usuario por su id 
router.put('/:id', usuariosController.updateById); 
// Borrar un usuario por su id 
router.delete('/:id', usuariosController.deleteById); 

module.exports = router;