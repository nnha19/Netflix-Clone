const userController = require("../controllers/userController");
const route = require("express").Router();

route.post("/signup", userController.createUser);

module.exports = route;
