"use strict";

const { Sequelize, DataTypes } = require("sequelize");
const db = require('../config/db.config.js');

const Contenedor = db.define("contenedores", {
  id_contenedor: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  codigo_contenedor: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true
  },
  lugar: {
    type: DataTypes.STRING,
    allowNull: false
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: true,
    onUpdate: Sequelize.NOW,
    defaultValue: Sequelize.NOW
  }
});

// Crear un nuevo contenedor
const create = async (nuevoContenedor) => {
  try {
    const contenedorCreado = await Usuario.create(nuevoContenedor);
    console.log("Contenedor creado con ID:", contenedorCreado.id);
    return contenedorCreado.id;
  } catch (error) {
    console.error("Error al crear el contenedor:", error);
    throw error;
  }
};

// Buscar un contenedor por su ID
const findById = async (id) => {
  try {
    const contenedorEncontrado = await Contenedor.findByPk(id);
    return contenedorEncontrado;
  } catch (error) {
    console.error("Error al buscar el contenedor:", error);
    throw error;
  }
};

// Obtener todos los contenedores
const findAll = async () => {
  try {
    const contenedores = await Contenedor.findAll();
    return contenedores;
  } catch (error) {
    console.error("Error al obtener todos los contenedores:", error);
    throw error;
  }
};

// Actualizar un contenedor
const updateById = async (id, datosActualizados) => {
  try {
    const [numFilasActualizadas, contenedoresActualizados] = await Contenedor.update(datosActualizados, {
      where: { id }
    });
    console.log(`Se actualizó el contenedor con ID ${id}. Filas afectadas: ${numFilasActualizadas}`);
    return contenedoresActualizados;
  } catch (error) {
    console.error("Error al actualizar el usuario:", error);
    throw error;
  }
};

// Eliminar un contenedor
const deleteById = async (id) => {
  try {
    const numFilasEliminadas = await Contenedor.destroy({
      where: { id }
    });
    console.log(`Se eliminó el contenedor con ID ${id}. Filas afectadas: ${numFilasEliminadas}`);
    return numFilasEliminadas;
  } catch (error) {
    console.error("Error al eliminar el contenedor:", error);
    throw error;
  }
};

module.exports = Contenedor;