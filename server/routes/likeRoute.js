const route = require("express").Router({ mergeParams: true });
const likeController = require("../controllers/likeController");

route.post("/", likeController.likeMovie);


module.exports =route