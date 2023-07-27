const express = require('express');
const router = express.Router();
const accionesController = require('../controllers/acciones.controller.js');

// Rutas para obtener, crear, actualizar y eliminar acciones
router.get("/", accionesController.findAll);
router.post("/", accionesController.create);
router.get("/:id", accionesController.findById);
router.put("/:id", accionesController.updateById);
router.delete("/:id", accionesController.deleteById);

module.exports = router;