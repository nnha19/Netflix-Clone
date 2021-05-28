const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");
const User = require("../Modal/User");

// User.remove({}).then(() => console.log("Deleted"));

const createUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const existingUser = await User.find({ email });
    if (existingUser.length > 0) {
      res.status(400).json({
        msg: "User with the provide email already exist. Please log in.",
      });
    } else {
      const hashedPassword = bcryptjs.hash(password, 12);
      const newUser = await User.create({
        email,
        password,
      });
      if (newUser) {
        const token = jwt.sign(
          {
            email,
          },
          process.env.SECRET_KEY,
          { expiresIn: "1h" }
        );
        res.status(200).json({
          token,
          msg: "User has been created successfully.",
          email,
        });
      }
    }
  } catch (err) {
    console.log(err);
    res.stats(400).json({ msg: "Something went wrong", err });
  }
};

exports.createUser = createUser;
