'use strict';

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
        const nuevoUsuario = new Usuario(req.body);
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
        const datosActualizados = req.body;
        const usuariosActualizados = await Usuario.update(idUsuario, datosActualizados);
        res.json({ error: false, message: 'Usuario actualizado exitosamente!', data: usuariosActualizados });
    } catch (error) {
        console.error('Error al actualizar el usuario:', error);
        res.status(500).json({ error: true, message: 'Error al actualizar el usuario' });
    }
};

exports.deleteById = async function (req, res) {
    try {
        const idUsuario = req.params.id;
        const numFilasEliminadas = await Usuario.delete(idUsuario);
        res.json({ error: false, message: 'Usuario eliminado exitosamente!', data: numFilasEliminadas });
    } catch (error) {
        console.error('Error al eliminar el usuario:', error);
        res.status(500).json({ error: true, message: 'Error al eliminar el usuario' });
    }
};
