'use strict';

const Accion = require('../models/acciones.model');

// Obtener todos las acciones
exports.findAll = async function (req, res) {
    try {
        const acciones = await Accion.findAll();
        res.json(acciones);
    } catch (error) {
        res.status(500).json({ error: true, message: "Error al obtener todas las acciones" });
    }
};

// Crear una nueva acción
exports.create = async function (req, res) {
    const nuevaAccion = req.body;

    if (!nuevaAccion || Object.keys(nuevaAccion).length === 0) {
        res.status(400).json({ error: true, message: "Por favor, proporcione todos los campos requeridos" });
        return;
    }

    try {
        const accionCreadaId = await Accion.create(nuevaAccion);
        res.json({ error: false, message: "Accion creada exitosamente", data: accionCreadaId });
    } catch (error) {
        res.status(500).json({ error: true, message: "Error al crear la accion" });
    }
};

// Buscar una acción por su ID
exports.findById = async function (req, res) {
    try {
        const idAccion = req.params.id;
        const accionEncontrada = await Accion.findByPk(idAccion);
        res.json(accionEncontrada);
    } catch (error) {
        console.error('Error al buscar la acción:', error);
        res.status(500).json({ error: true, message: 'Error al buscar la acción' });
    }
};


// Actualizar una acción
exports.updateById = async function (req, res) {
    try {
        // Obtener el id de la acción a actualizar desde los parámetros de la URL
        const idAccion = req.params.id;

        // Obtener los datos actualizados de la acción desde el cuerpo de la solicitud
        const datosActualizados = req.body;

        // Opciones para la actualización de la tarjeta
        const opciones = {
            where: { id_accion: idAccion } // Especificamos la cláusula where con el id de la acción a actualizar
        };

        // Llamamos a Accion.update() con los datos actualizados y las opciones
        const numFilasActualizadas = await Accion.update(datosActualizados, opciones);

        res.json({ error: false, message: 'Acción actualizada exitosamente!', data: numFilasActualizadas });
    } catch (error) {
        console.error('Error al actualizar la acción:', error);
        res.status(500).json({ error: true, message: 'Error al actualizar la acción', errorDetails: error });
    }
};

// Eliminar una acción
exports.deleteById = async function (req, res) {
    try {
        const idAccion = req.params.id;
        const opciones = {
            where: { id_accion: idAccion } // Especificamos la cláusula where con el ID de la acción a eliminar
        };

        // Llamamos a Accion.destroy() con las opciones
        const numFilasEliminadas = await Accion.destroy(opciones);

        res.json({ error: false, message: 'Acción eliminada exitosamente!', data: numFilasEliminadas });
    } catch (error) {
        console.error('Error al eliminar la acción:', error);
        res.status(500).json({ error: true, message: 'Error al eliminar la acción' });
    }
};