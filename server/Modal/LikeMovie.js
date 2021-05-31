const mongoose = require("mongoose");

const likeMovieSchema = new mongoose.Schema({
  movieId: String,
  like: Boolean,
  unLikne: Boolean,
});

module.exports = mongoose.model("LikeMovie", likeMovieSchema);
