const express = require("express");
const port = 3000;
var cors = require("cors");
const routes = require("./routes");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
var corsMiddleware = function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  next();
};


mongoose
  .connect(
    "mongodb+srv://notagodzilla:8608684820@cluster0.0s183.mongodb.net/test",
    { useNewUrlParser: true }
  )
  .then(() => {
    const app = express();
    app.use(corsMiddleware);
    app.use("/api", routes);
    app.use(cors());
    app.options('*', cors())
    app.use(express.urlencoded({ extended: true }));
    app.use(bodyParser.urlencoded({ extended: true }));
    app.listen(port, () => {
      console.log("Server has started!");
    });
  });
