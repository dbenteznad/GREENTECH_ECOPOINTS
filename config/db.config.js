"use strict";

const mysql = require("mysql");

// Local mysql db connection
const dbConn = mysql.createConnection({
    host: "localhost",
    user: "greentech",
    password: "greentech2023",
    database: "greentech_ecopoints"
});

dbConn.connect(function (err) {
    if (err) throw err;
    console.log("Database Connected!");
});
module.exports = dbConn;