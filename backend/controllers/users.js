//Controlador del gym (aqui van los metodos y todo lo que se vaya a realizar)
"use strict";

//No existe un actualizar usuario ya que el usuario no puede modificar algunos parametros
var User = require("../models/usuario");

var UserController = {
  //creamos usuarios
  createUsers: function (req, res) {
    //var clase = new Clase();
    var body = req.body;
    var usuarios = [];
    var c = 0;

    body.forEach((element) => {
      var user = new User();
      user.usuario = element.usuario.toUpperCase();
      user.telefono = element.telefono;
      user.dni = element.dni;
      console.debug("El user a crear es " + user);
      user.save((err, createdUsers) => {
        if (err)
          return res.status(500).send({
            messageError: "Ha ocurrido un error al crear el user",
          });
        if (!createdUsers)
          return res.status(400).send({
            message: "No se ha registrado el user",
          });
        c++;
        usuarios.push(createdUsers);
        console.debug("Los users creados son " + usuarios);
        if (c == body.length) {
          return res.status(200).send({
            user: usuarios,
          });
        }
      });
    });
  }, //fin createUser
  registryUser: function (req, res) {
    var d = new Date();
    var h = d.getHours() + ":" + d.getMinutes();
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();
    today = `${yyyy}-${mm}-${dd}`;
    var dniUsuario = req.body.params.dni;
    User.findOneAndUpdate(
      {
        dni: dniUsuario,
      },
      {
        $push: {
          fecha: {
            dia: today,
            hora: h,
          },
        },
      },

      { new: true },
      (err, userUpdated) => {
        if (err)
          return res.status(500).send("No se ha podido añadir la imagen");
        if (!userUpdated)
          return res.status(404).send({
            message:
              "El ejercicio no existe y no se ha podido añadir la imagen",
          });

        return res.status(200);
      }
    );
  },

  getUsers: function (req, res) {
    User.find({}, (err, userExist) => {
      return res.status(200).send({
        users: userExist,
      });
    });
  },

  getUserDia: function (req, res) {
    var diaObtenido = req.param.dia;

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();
    today = `${yyyy}-${mm}-${dd}`;

    User.find({ "fecha.dia": today }, (err, userExist) => {
      return res.status(200).send({
        users: userExist.map((c) => {
          return {
            user: c.usuario,
            dni: c.dni,
            telefono: c.telefono,
            fecha: c.fecha.filter((c) => {
              if (c.dia == today) {
                return c;
              }
            })[0],
          };

        }),
      });
    });
  },
  getUserFecha: function (req, res) {
    console.log(req.query)
    var diaObtenido = req.query.dia;

    var today = new Date(diaObtenido);
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();
    today = `${yyyy}-${mm}-${dd}`;

    User.find({ "fecha.dia": today }, (err, userExist) => {
      return res.status(200).send({
        users: userExist.map((c) => {
          return {
            user: c.usuario,
            dni: c.dni,
            telefono: c.telefono,
            fecha: c.fecha.filter((c) => {
              if (c.dia == today) {
                return c;
              }
            })[0],
          };

        }),
      });
    });
  },
};

module.exports = UserController;
