const User = require("../Modal/User");
const MyList = require("../Modal/MyList");

const getAllLists = async (req, res, next) => {
  try {
  } catch (err) {
    res
      .status(400)
      .json({ msg: "Something went wrong. Please try again later.", err });
  }
};

const createList = async (req, res, next) => {
  try {
    const { uid } = req.params;
    const { movieId } = req.body;
    let user;
    User.findById(uid)
      .populate("myList")
      .exec(async (err, user) => {
        if (err) {
          res
            .status(400)
            .json({ msg: "Something went wrong. Please try again.", err });
        } else {
          const existingList = await MyList.findOne({ movieId });
          if (existingList) {
            const removedList = await MyList.findOneAndRemove({ movieId });
            const newList = user.myList.filter((list) => {
              return list.movieId !== existingList.movieId;
            });
            user.myList = newList;
            await user.save();
            res
              .status(200)
              .json({ msg: "Successfully removed list.", removedList });
          } else {
            const addedMyList = await MyList.create({
              movieId,
            });
            user.myList.push(addedMyList);
            await user.save();
            res.status(200).json({ msg: "Movie added to list.", addedMyList });
          }
        }
      });
  } catch (err) {
    console.log(err);
    res
      .status(400)
      .json({ msg: "Something went wrong. Please try again later.", err });
  }
};

exports.getAllLists = getAllLists;
exports.createList = createList;
