const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
app.use(cors());
require("dotenv").config();

app.use(express.json());
mongoose
  .connect(
    `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0-shard-00-00.yrg2a.mongodb.net:27017,cluster0-shard-00-01.yrg2a.mongodb.net:27017,cluster0-shard-00-02.yrg2a.mongodb.net:27017/${process.env.DB_NAME}?ssl=true&replicaSet=atlas-90vt8b-shard-0&authSource=admin&retryWrites=true&w=majority`,
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }
  )
  .then(() => console.log("Connected to the server"))
  .catch((err) => console.log(err));

const userRoute = require("./routes/userRoute");
const myListRoute = require("./routes/myListRoute");
const likeRoute = require("./routes/likeRoute");

app.use("/user", userRoute);
app.use("/:uid/my-list", myListRoute);
app.use("/:uid/movie/:mid", likeRoute);

app.get("/", (req, res) => {
  res.send("Deploy finishes finally.");
});

const port = process.env.PORT || 5000;
app.listen(port, function () {
  console.log("Server has started");
});
