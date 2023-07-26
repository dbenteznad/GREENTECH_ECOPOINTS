"use strict";

const { Sequelize, DataTypes } = require("sequelize");
const db = require('../config/db.config.js');

const Tarjeta = db.define("tarjetas", {
  id_tarjeta_usuario: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  id_usuario: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
        model: "usuarios",
        key: "id_usuario"
      }
  },
  puntos_acumulados: {
    type: DataTypes.INTEGER,
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

// Crear una nueva tarjeta
const create = async (nuevoTarjeta) => {
  try {
    const tarjetaCreada = await Tarjeta.create(nuevoTarjeta);
    console.log("Tarjeta creado con ID:", tarjetaCreada.id);
    return tarjetaCreada.id;
  } catch (error) {
    console.error("Error al crear el usuario:", error);
    throw error;
  }
};

// Buscar una tarjeta por su ID
const findById = async (id) => {
  try {
    const tarjetaEncontrada = await Tarjeta.findByPk(id);
    return tarjetaEncontrada;
  } catch (error) {
    console.error("Error al buscar la tarjeta:", error);
    throw error;
  }
};

// Obtener todos los tarjetas
const findAll = async () => {
  try {
    const tarjetas = await Tarjeta.findAll();
    return tarjetas;
  } catch (error) {
    console.error("Error al obtener todos los tarjetas:", error);
    throw error;
  }
};

// Actualizar una tarjeta
const updateById = async (id, datosActualizados) => {
  try {
    const [numFilasActualizadas, tarjetasActualizados] = await Tarjeta.update(datosActualizados, {
      where: { id }
    });
    console.log(`Se actualizó la tarjeta con ID ${id}. Filas afectadas: ${numFilasActualizadas}`);
    return tarjetasActualizados;
  } catch (error) {
    console.error("Error al actualizar la tarjeta:", error);
    throw error;
  }
};

// Eliminar una tarjeta
const deleteById = async (id) => {
  try {
    const numFilasEliminadas = await Tarjeta.destroy({
      where: { id }
    });
    console.log(`Se eliminó la tarjeta con ID ${id}. Filas afectadas: ${numFilasEliminadas}`);
    return numFilasEliminadas;
  } catch (error) {
    console.error("Error al eliminar la tarjeta:", error);
    throw error;
  }
};

module.exports = Tarjeta;