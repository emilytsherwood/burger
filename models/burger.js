// Importing the connection.js file
var connectionFile = require('../config/connection.js');
// Importing the orm.js file
var orm = require("../config/orm.js");

//Calling the ORM functions
var burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  }
};


// Exporting the file
module.exports = burger;