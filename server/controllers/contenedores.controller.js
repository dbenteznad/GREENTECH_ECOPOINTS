'use strict';

const Contenedor = require('../models/contenedores.model');

// Obtener todos los contenedores
exports.findAll = async function (req, res) {
    try {
        const contenedores = await Contenedor.findAll();
        res.json(contenedores);
    } catch (error) {
        res.status(500).json({ error: true, message: "Error al obtener todos los contenedores" });
    }
};

// Crear un nuevo contenedor
exports.create = async function (req, res) {
    const nuevoContenedor = req.body;

    if (!nuevoContenedor || Object.keys(nuevoContenedor).length === 0) {
        res.status(400).json({ error: true, message: "Por favor, proporcione todos los campos requeridos" });
        return;
    }

    try {
        const contenedorCreadoId = await Contenedor.create(nuevoContenedor);
        res.json({ error: false, message: "Contenedor creado exitosamente", data: contenedorCreadoId });
    } catch (error) {
        res.status(500).json({ error: true, message: "Error al crear el contenedor" });
    }
};

// Buscar un contenedor por su ID
exports.findById = async function (req, res) {
    try {
        const idContenedor = req.params.id;
        const contenedorEncontrado = await Contenedor.findByPk(idContenedor);
        res.json(contenedorEncontrado);
    } catch (error) {
        console.error('Error al buscar el contenedor:', error);
        res.status(500).json({ error: true, message: 'Error al buscar el contenedor' });
    }
};


// Actualizar un contenedor
exports.updateById = async function (req, res) {
    try {
        // Obtener el id del contenedor a actualizar desde los parámetros de la URL
        const idContenedor = req.params.id;

        // Obtener los datos actualizados del contenedor desde el cuerpo de la solicitud
        const datosActualizados = req.body;

        // Opciones para la actualización del contenedor
        const opciones = {
            where: { id_contenedor: idContenedor } // Especificamos la cláusula where con el id de la tarjeta a actualizar
        };

        // Llamamos a Contenedor.update() con los datos actualizados y las opciones
        const numFilasActualizadas = await Contenedor.update(datosActualizados, opciones);

        res.json({ error: false, message: 'Contenedor actualizada exitosamente!', data: numFilasActualizadas });
    } catch (error) {
        console.error('Error al actualizar el contenedor:', error);
        res.status(500).json({ error: true, message: 'Error al actualizar el contenedor', errorDetails: error });
    }
};

// Eliminar un contenedor
exports.deleteById = async function (req, res) {
    try {
        const idContenedor = req.params.id;
        const opciones = {
            where: { id_contenedor: idContenedor } // Especificamos la cláusula where con el ID del contenedor a eliminar
        };

        // Llamamos a Contenedor.destroy() con las opciones
        const numFilasEliminadas = await Contenedor.destroy(opciones);

        res.json({ error: false, message: 'Contenedor eliminada exitosamente!', data: numFilasEliminadas });
    } catch (error) {
        console.error('Error al eliminar el contenedor:', error);
        res.status(500).json({ error: true, message: 'Error al eliminar el contenedor' });
    }
};
