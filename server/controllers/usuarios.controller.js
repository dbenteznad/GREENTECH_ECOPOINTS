'use strict';

const bcrypt = require('bcrypt');
const Usuario = require('../models/usuarios.model.js');

exports.findAll = async function (req, res) {
    try {
        const usuarios = await Usuario.findAll();
        console.log('controller', usuarios);
        res.json(usuarios);
    } catch (error) {
        console.error('Error al obtener todos los usuarios:', error);
        res.status(500).json({ error: true, message: 'Error al obtener todos los usuarios' });
    }
};

exports.create = async function (req, res) {
    try {
        const { correo_electronico, contrasena } = req.body;

        // Hashear la contraseña antes de crear el usuario
        const hashedPassword = await bcrypt.hash(contrasena, 10);

        const nuevoUsuario = {
            correo_electronico,
            contrasena: hashedPassword, // Usar la contraseña hasheada
            // Agrega otros campos aquí si los deseas
        };

        const idUsuarioCreado = await Usuario.create(nuevoUsuario);
        res.json({ error: false, message: 'Usuario agregado exitosamente!', data: idUsuarioCreado });
    } catch (error) {
        console.error('Error al crear el usuario:', error);
        res.status(500).json({ error: true, message: 'Error al crear el usuario' });
    }
};

exports.findById = async function (req, res) {
    try {
        const idUsuario = req.params.id;
        const usuarioEncontrado = await Usuario.findByPk(idUsuario);
        res.json(usuarioEncontrado);
    } catch (error) {
        console.error('Error al buscar el usuario:', error);
        res.status(500).json({ error: true, message: 'Error al buscar el usuario' });
    }
};

exports.updateById = async function (req, res) {
    try {
        const idUsuario = req.params.id;
        const datosActualizados = req.body; // Datos actualizados enviados en el cuerpo de la solicitud
        const opciones = {
            where: { id_usuario: idUsuario } // Especificamos la cláusula where con el ID del usuario a actualizar
        };

        // Llamamos a Usuario.update() con los datos actualizados y las opciones
        const numFilasActualizadas = await Usuario.update(datosActualizados, opciones);

        res.json({ error: false, message: 'Usuario actualizado exitosamente!', data: numFilasActualizadas });
    } catch (error) {
        console.error('Error al actualizar el usuario:', error);
        res.status(500).json({ error: true, message: 'Error al actualizar el usuario' });
    }
};


exports.deleteById = async function (req, res) {
    try {
        const idUsuario = req.params.id;
        const opciones = {
            where: { id_usuario: idUsuario } // Especificamos la cláusula where con el ID del usuario a eliminar
        };

        // Llamamos a Usuario.destroy() con las opciones
        const numFilasEliminadas = await Usuario.destroy(opciones);

        res.json({ error: false, message: 'Usuario eliminado exitosamente!', data: numFilasEliminadas });
    } catch (error) {
        console.error('Error al eliminar el usuario:', error);
        res.status(500).json({ error: true, message: 'Error al eliminar el usuario' });
    }
};
