"use strict";

const { Sequelize, DataTypes } = require("sequelize");
const db = require('../config/db.config.js');

const Accion = db.define("acciones", {
  id_accion: {
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
  id_contenedor: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "contenedores",
      key: "id_contenedor"
    }
  },
  fecha_accion: {
    type: DataTypes.DATE,
    allowNull: true
  },
  hora_accion: {
    type: DataTypes.TIME,
    allowNull: true
  },
  cant_aluminio: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  cant_plastico: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  cant_cristal: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  kg_papel: {
    type: DataTypes.FLOAT,
    allowNull: true
  },
  kg_organico: {
    type: DataTypes.FLOAT,
    allowNull: true
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

// Crear una nueva acción
const create = async (nuevaAccion) => {
  try {
    const accionCreada = await Accion.create(nuevaAccion);
    console.log("Acción creada con ID:", accionCreada.id);
    return accionCreada.id;
  } catch (error) {
    console.error("Error al crear la acción:", error);
    throw error;
  }
};

// Buscar una acción por su ID
const findById = async (id) => {
  try {
    const accionEncontrada = await Accion.findByPk(id);
    return accionEncontrada;
  } catch (error) {
    console.error("Error al buscar la acción:", error);
    throw error;
  }
};

// Obtener todas las acciones
const findAll = async () => {
  try {
    const acciones = await Accion.findAll();
    return acciones;
  } catch (error) {
    console.error("Error al obtener todas las acciones:", error);
    throw error;
  }
};

// Actualizar una acción
const updateById = async (id, datosActualizados) => {
  try {
    const [numFilasActualizadas, accionesActualizadas] = await Accion.update(datosActualizados, {
      where: { id }
    });
    console.log(`Se actualizó la acción con ID ${id}. Filas afectadas: ${numFilasActualizadas}`);
    return accionesActualizadas;
  } catch (error) {
    console.error("Error al actualizar el id:", error);
    throw error;
  }
};

// Eliminar una accion
const deleteById = async (id) => {
  try {
    const numFilasEliminadas = await Accion.destroy({
      where: { id }
    });
    console.log(`Se eliminó la acción con ID ${id}. Filas afectadas: ${numFilasEliminadas}`);
    return numFilasEliminadas;
  } catch (error) {
    console.error("Error al eliminar la acción:", error);
    throw error;
  }
};

module.exports = Accion;