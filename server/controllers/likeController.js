const User = require("../Modal/User");

// User.find({}).then((user) => console.log(user));

const likeMovie = async (req, res, next) => {
  try {
    const { uid, mid } = req.params;
    const { type } = req.body;
    const user = await User.findById(uid);

    if (user) {
      res.status(400).json({ msg: "No user found with provided id." });
      return;
    }

    function toggleLikeDisLike(type) {
      const oppositeType =
        type === "likeMovies" ? "disLikeMovies" : "likeMovies";
      const disLiked = user[oppositeType].some(
        (disLikeMovie) => disLikeMovie === mid
      );
      if (disLiked) {
        const removedDisLike = user[oppositeType].filter(
          (disLike) => disLike !== mid
        );
        user[oppositeType] = removedDisLike;
      }
    }
    const alreadyLiked = user[type].some((likeMovie) => likeMovie === mid);
    if (alreadyLiked) {
      const removedLike = user[type].filter((likeMovie) => likeMovie !== mid);
      user[type] = removedLike;
    } else {
      toggleLikeDisLike(type);
      user[type].push(mid);
    }

    await user.save();
    console.log(user);
    res.status(200).json({ msg: "Successful" });
  } catch (err) {
    console.log(err);
    res
      .status(400)
      .json({ msg: "Something went wrong. Please try again later." });
  }
};

exports.likeMovie = likeMovie;
