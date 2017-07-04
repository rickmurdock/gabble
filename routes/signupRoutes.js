const express  = require("express");
const signupRouter = express.Router();
const models = require("../models");

signupRouter.get("/", function(req, res) {
  res.render('signup');
});

signupRouter.post("/", function(req, res) {
  if (!req.body || !req.body.username || !req.body.password) {
      res.redirect("/");
  }

  var newUser = models.user.build({
    username : req.body.username,
    password : req.body.password,
    displayname : req.body.displayName 
  });
  newUser
    .save()
    .then(function(savedUser) {
      res.redirect("/login");
    })
    .catch(function(err) {
      res.status(500).send(err);
    });
});

module.exports = signupRouter;