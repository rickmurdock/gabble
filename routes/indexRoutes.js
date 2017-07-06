const express  = require('express');
const indexRouter = express.Router();
const shared = require('../public/sharedFunctions.js');
const models = require("../models");

indexRouter.get("/", shared.checkAuth, function(req, res) {
  models.message
    .findAll({
      include: [
        {
          model: models.user,
          as: 'author'
        }
      ]
    })
    .then(function(foundMessages) {     
    res.render("index", { messages: foundMessages,
                          user: req.session.user });
  })
  .catch(function(err) {
    res.status(500).send(err);
  }); 
});

indexRouter.post("/like/:id", function(req, res) {
  var newLike = models.like.build({
    messageId : req.params.id,
    userId : req.session.user.userId
  })
  newLike
    .save()
    .then(function(savedLike) {
      res.redirect("/");
    })
    .catch(function(err) {
      res.status(500).send(err);
    });
});

module.exports = indexRouter;