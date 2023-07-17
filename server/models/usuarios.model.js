"use strict";

const { Sequelize, DataTypes } = require("sequelize");
const db = require('../config/db.config.js');

const Usuario = db.define("usuarios", {
    id_usuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true 
      },
    correo_electronico: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    contrasena: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    numero_movil: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ubicacion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    basura_papel: {
        type: DataTypes.TINYINT,
        allowNull: false
    },
    basura_plastico: {
        type: DataTypes.TINYINT,
        allowNull: false
    },
    basura_resto: {
        type: DataTypes.TINYINT,
        allowNull: false
    },
    basura_organico: {
        type: DataTypes.TINYINT,
        allowNull: false
    },
    basura_cristal: {
        type: DataTypes.TINYINT,
        allowNull: false
    },
    no_recicla: {
        type: DataTypes.TINYINT,
        allowNull: false
    },
    edad: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    genero: {
        type: DataTypes.ENUM,
        allowNull: true,
        values: ["masculino", "femenino"]
    },
    estado_civil: {
        type: DataTypes.ENUM,
        allowNull: true,
        values: ["soltero/soltera", "casado/casada", "viudo/viuda", "separado/separada"]
    },
    hijos: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    tipo_vivienda: {
        type: DataTypes.ENUM,
        allowNull: true,
        values: ["casa", "piso", "departamento", "apartamento", "chalet", "mansión", "duplex", "loft", "otro"]
    },
    nivel_estudios: {
        type: DataTypes.ENUM,
        allowNull: true,
        values: ["sin estudios", "educación primaria", "educación secundaria", "bachillerato", "técnico o formación profesional", "universidad(licenciatura/grado)", "posgrado (maestría/máster)", "doctorado", "otro"]
    },
    profesion: {
        type: DataTypes.ENUM,
        allowNull: true,
        values: ["administrativo/a", "arquitecto/a", "asistente administrativo/a", "contador/a", "diseñador/a", "ingeniero/a", "médico/a", "profesor/a", "programador/a", "estudiante", "trabajador/a social", "empresario/a", "abogado/a", "comerciante", "periodista", "investigador/a", "artista", "obrero/a", "agricultor/a", "otro"]
    },
    creado_en: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      },
      modificado_en: {
        type: DataTypes.DATE,
        allowNull: true,
        onUpdate: Sequelize.NOW,
        defaultValue: Sequelize.NOW
      }
});

// Crear un nuevo usuario
const create = async (nuevoUsuario) => {
  try {
    const usuarioCreado = await Usuario.create(nuevoUsuario);
    console.log("Usuario creado con ID:", usuarioCreado.id);
    return usuarioCreado.id;
  } catch (error) {
    console.error("Error al crear el usuario:", error);
    throw error;
  }
};

// Buscar un usuario por su ID
const findById = async (id) => {
  try {
    const usuarioEncontrado = await Usuario.findByPk(id);
    return usuarioEncontrado;
  } catch (error) {
    console.error("Error al buscar el usuario:", error);
    throw error;
  }
};

// Obtener todos los usuarios
const findAll = async () => {
  try {
    const usuarios = await Usuario.findAll();
    return usuarios;
  } catch (error) {
    console.error("Error al obtener todos los usuarios:", error);
    throw error;
  }
};

// Actualizar un usuario
const updateById = async (id, datosActualizados) => {
  try {
    const [numFilasActualizadas, usuariosActualizados] = await Usuario.update(datosActualizados, {
      where: { id }
    });
    console.log(`Se actualizó el usuario con ID ${id}. Filas afectadas: ${numFilasActualizadas}`);
    return usuariosActualizados;
  } catch (error) {
    console.error("Error al actualizar el usuario:", error);
    throw error;
  }
};

// Eliminar un usuario
const deleteById = async (id) => {
  try {
    const numFilasEliminadas = await Usuario.destroy({
      where: { id }
    });
    console.log(`Se eliminó el usuario con ID ${id}. Filas afectadas: ${numFilasEliminadas}`);
    return numFilasEliminadas;
  } catch (error) {
    console.error("Error al eliminar el usuario:", error);
    throw error;
  }
};

module.exports = Usuario;