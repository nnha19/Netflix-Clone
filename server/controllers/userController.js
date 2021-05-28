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
      const hashedPassword = await bcryptjs.hash(password, 12);
      const newUser = await User.create({
        email,
        password: hashedPassword,
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

const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    const correctPass = await bcryptjs.compare(password, user.password);
    if (correctPass) {
      const token = jwt.sign({ email }, process.env.SECRET_KEY, {
        expiresIn: "1h",
      });
      res.status(200).json({ email, token });
    }
  } catch (err) {
    console.log(err);
    res.status(400).json({
      msg: "Something went wrong with the server. Try again later.",
      err,
    });
  }
};

exports.createUser = createUser;
exports.loginUser = loginUser;
