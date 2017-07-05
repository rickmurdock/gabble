const express  = require('express');
const indexRouter = express.Router();
const shared = require('../public/sharedFunctions.js');
const models = require("../models");

indexRouter.get("/", shared.checkAuth, function(req, res) {
  // res.render("index", { user: req.session.user });
  console.log("IN INDEX ROUTER>>>>>>>>>>>>>>>");
  models.message
    .findAll()
    .then(function(foundMessages) {
      console.log("FOUND______", foundMessages);
    res.render("index", { messages: foundMessages,
                          user: req.session.user });
  })
  .catch(function(err) {
    res.status(500).send(err);
  }); 
});

module.exports = indexRouter;