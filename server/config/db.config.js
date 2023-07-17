"use strict";

const Sequelize = require("sequelize");

const db = new Sequelize(
    "greentech_ecopoints",
    "greentech",
    "greentech2023",
    {
        host: "localhost",
        dialect: "mysql"
    }
);

db.authenticate().then(() => {
   console.log('La conexión se ha establecido correctamente');
}).catch((error) => {
   console.error('No se pudo conectar a la base de datos: ', error);
});

module.exports = db;