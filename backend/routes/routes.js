//Se encarga de redireccionar el path asociado a cada uno de los controladores

"use strict";

var express = require("express");
var UserController = require("../controllers/users");


var router = express.Router();



//Usuario
// router.get(
//   ["/user-nickname/:nickname", "/user-email/:email"],
//   UserController.getUser
// );

router.get("/get-users-fecha",UserController.getUserFecha);
router.get("/get-users-dia",UserController.getUserDia);
router.get("/get-users",UserController.getUsers);
router.post("/create-users", UserController.createUsers);
router.post("/registry-user", UserController.registryUser);


module.exports = router;
