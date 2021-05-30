const mongoose = require("mongoose");

const myListSchema = new mongoose.Schema({
  movieId: String,
});

module.exports = mongoose.model("MyList", myListSchema);
