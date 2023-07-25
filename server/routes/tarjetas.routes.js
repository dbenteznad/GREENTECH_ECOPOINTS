const express = require('express');
const router = express.Router();
const tarjetasController = require('../controllers/tarjetas.controller.js');

// Rutas para obtener, crear, actualizar y eliminar tarjetas
router.get("/", tarjetasController.findAll);
router.post("/", tarjetasController.create);
router.get("/:id", tarjetasController.findById);
router.put("/:id", tarjetasController.update);
router.delete("/:id", tarjetasController.delete);

module.exports = router;