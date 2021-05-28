const userController = require("../controllers/userController");
const route = require("express").Router();

route.post("/signup", userController.createUser);
route.post("/login", userController.loginUser);

module.exports = route;
