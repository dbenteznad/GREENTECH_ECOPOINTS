const express = require('express');
const router = express.Router();
const contenedoresController = require('../controllers/contenedores.controller.js');

// Rutas para obtener, crear, actualizar y eliminar tarjetas
router.get("/", contenedoresController.findAll);
router.post("/", contenedoresController.create);
router.get("/:id", contenedoresController.findById);
router.put("/:id", contenedoresController.updateById);
router.delete("/:id", contenedoresController.deleteById);

module.exports = router;