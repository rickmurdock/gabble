const express = require("express");
const expressValidator = require("express-validator")
const bodyParser = require('body-parser');
const mustacheExpress = require('mustache-express');
const port = process.env.PORT || 8000;
// const models = require("./models");
const app = express();


// RENDER ENGINE
app.engine("mustache", mustacheExpress());
app.set("views", "./views");
app.set("view engine", "mustache")

//MIDDLEWARE
app.use("/", express.static(__dirname + "/views"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// ROUTES
app.get("/", function(req, res) {
  res.render('index');
});

app.get("/creategab", function(req, res) {
  res.render('creategab');
});

app.get("/login", function(req, res) {
  res.render('login');
});

app.get("/signup", function(req, res) {
  res.render('signup');
});

app.get("/likes", function(req, res) {
  res.render('likes');
});

// LISTENER
app.listen(port, function() {
  console.log('Babble server is running on port: ', port);
});