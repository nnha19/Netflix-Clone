const likeMovie = (req, res, next) => {
  try {
  } catch (err) {
    res
      .stats(400)
      .json({ msg: "Something went wrong. Please try again later." });
  }
};

exports.likeMovie = likeMovie;
