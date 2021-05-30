const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  email: String,
  password: String,
  myList: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "MyList",
    },
  ],
});

module.exports = mongoose.model("User", userSchema);
