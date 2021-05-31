const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
app.use(cors());
require("dotenv").config();

app.use(express.json());
mongoose
  .connect(process.env.DB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("Connected to the server"))
  .catch((err) => console.log(err));

const userRoute = require("./routes/userRoute");
const myListRoute = require("./routes/myListRoute");
const likeRoute = require("./routes/likeRoute");

app.use("/user", userRoute);
app.use("/:uid/my-list", myListRoute);
app.use("/:uid/movie/:mid", likeRoute);

const port = process.env.port || 5000;
app.listen(port, function () {
  console.log("Server has started");
});
