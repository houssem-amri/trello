const express = require("express"); // importation express js
const bodyParser = require("body-parser"); // importation body-parser
const mongoose = require("mongoose");

// connnect  mongoose
mongoose.connect("mongodb://localhost:27017/achrefDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const User = require("./models/user");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Security configuration
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, Accept, Content-Type, X-Requested-with, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, DELETE, OPTIONS, PATCH, PUT"
  );
  next();
});

app.post("/houssem", (req, res) => {
  console.log("herrrrrreeee", req.body);
  const user = new User({
    Email: req.body.Email,
    Password: req.body.Password,
    Address: req.body.Address,
    City: req.body.City,
  });

  user.save().then(
    res.status(200).json({
      message: "user created succefful",
    })
  );
});

module.exports = app;
