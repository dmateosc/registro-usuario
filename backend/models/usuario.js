"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Usuario = Schema({
  usuario: String,
  dni: String,
  telefono: String,
  fecha :[{
    dia: String,
    hora: String
  }]
 
});

module.exports = mongoose.model("User", Usuario);
