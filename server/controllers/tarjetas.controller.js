'use strict';

const Tarjeta = require('../models/tarjetas.model');

// Obtener todos los tarjetas
exports.findAll = async function (req, res) {
    try {
        const tarjetas = await Tarjeta.findAll();
        res.json(tarjetas);
    } catch (error) {
        res.status(500).json({ error: true, message: "Error al obtener todos los tarjetas" });
    }
};

// Crear una nueva tarjeta
exports.create = async function (req, res) {
    const nuevaTarjeta = req.body;

    if (!nuevaTarjeta || Object.keys(nuevaTarjeta).length === 0) {
        res.status(400).json({ error: true, message: "Por favor, proporcione todos los campos requeridos" });
        return;
    }

    try {
        const tarjetaCreadaId = await Tarjeta.create(nuevaTarjeta);
        res.json({ error: false, message: "Tarjeta creada exitosamente", data: tarjetaCreadaId });
    } catch (error) {
        res.status(500).json({ error: true, message: "Error al crear la tarjeta" });
    }
};

// Buscar una tarjeta por su ID
exports.findById = async function (req, res) {
    try {
        const idTarjeta = req.params.id;
        const tarjetaEncontrada = await Tarjeta.findByPk(idTarjeta);
        res.json(tarjetaEncontrada);
    } catch (error) {
        console.error('Error al buscar la tarjeta:', error);
        res.status(500).json({ error: true, message: 'Error al buscar la tarjeta' });
    }
};


// Actualizar una tarjeta
exports.update = async function (req, res) {
    try {
        // Obtener el id de la tarjeta a actualizar desde los parámetros de la URL
        const idTarjeta = req.params.id;

        // Obtener los datos actualizados de la tarjeta desde el cuerpo de la solicitud
        const datosActualizados = req.body;

        // Opciones para la actualización de la tarjeta
        const opciones = {
            where: { id_tarjeta_usuario: idTarjeta } // Especificamos la cláusula where con el id de la tarjeta a actualizar
        };

        // Llamamos a Tarjeta.update() con los datos actualizados y las opciones
        const numFilasActualizadas = await Tarjeta.update(datosActualizados, opciones);

        res.json({ error: false, message: 'Tarjeta actualizada exitosamente!', data: numFilasActualizadas });
    } catch (error) {
        console.error('Error al actualizar la tarjeta:', error);
        res.status(500).json({ error: true, message: 'Error al actualizar la tarjeta', errorDetails: error });
    }
};

// Eliminar una tarjeta
exports.delete = async function (req, res) {
    try {
        const idTarjeta = req.params.id;
        const opciones = {
            where: { id_tarjeta_usuario: idTarjeta } // Especificamos la cláusula where con el ID de la tarjeta a eliminar
        };

        // Llamamos a Tarjeta.destroy() con las opciones
        const numFilasEliminadas = await Tarjeta.destroy(opciones);

        res.json({ error: false, message: 'Tarjeta eliminada exitosamente!', data: numFilasEliminadas });
    } catch (error) {
        console.error('Error al eliminar la tarjeta:', error);
        res.status(500).json({ error: true, message: 'Error al eliminar la tarjeta' });
    }
};
