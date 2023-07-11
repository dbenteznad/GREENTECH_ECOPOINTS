'use strict';

var dbConn = require('../../config/db.config');

//User object create
var User = function (user) {
    this.email = user.email;
    this.password = user.password;
    this.name = user.name;
    this.phone = user.phone;
    this.location = user.location;
    this.paper_waste_bin = user.paper_waste_bin;
    this.plastic_waste_bin = user.plastic_waste_bin;
    this.general_waste_bin = user.general_waste_bin;
    this.organic_waste_bin = user.organic_waste_bin;
    this.glass_waste_bin = user.glass_waste_bin;
    this.not_recycle = user.not_recycle;
    this.created_at = new Date();
    this.updated_at = new Date();
};

User.create = function (newUser, result) {
    dbConn.query("INSERT INTO users set ?", newUser, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};

User.findById = function (id, result) {
    dbConn.query("Select * from users where id = ? ", id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};

User.findAll = function (result) {
    dbConn.query("Select * from users", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('users : ', res); result(null, res);
        }
    });
};

User.update = function (id, user, result) {
    dbConn.query("UPDATE users SET email=?,password=?,name=?,phone=?,location=?, paper_waste_bin=?, plastic_waste_bin=?, general_waste_bin=?, organic_waste_bin=?, glass_waste_bin=?, not_recycle=? WHERE id = ?",
        [user.email, user.password, user.name, user.phone, user.location, user.paper_waste_bin, user.plastic_waste_bin, user.general_waste_bin, user.organic_waste_bin, user.glass_waste_bin, user.not_recycle, id],
        function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(null, err);
            } else {
                result(null, res);
            }
        });
};

User.delete = function (id, result) {
    dbConn.query("DELETE FROM users WHERE id = ?", [id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};
module.exports = User;