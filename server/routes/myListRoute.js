const route = require("express").Router({ mergeParams: true });
const myListController = require("../controllers/myListController");

route.get("/", myListController.getAllLists);
route.post("/", myListController.createList);

module.exports = route;
