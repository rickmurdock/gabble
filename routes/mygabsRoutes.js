const express  = require('express');
const mygabsRouter = express.Router();
const shared = require('../public/sharedFunctions.js');
const models = require("../models");

mygabsRouter.get("/", shared.checkAuth, function(req, res) {
  models.message
    // .findAll({
    .findAll({ 
      where: { authorId: req.session.user.userId },
      include: [
        {
          model: models.user,
          as: "author"
        },
        {
          model: models.like,
          as: "likes",
          include: { 
            model: models.user,
            as: "user"
          }
        }
      ]
    })
    .then(function(foundMessages) {   
      console.log(foundMessages);  
    res.render("mygabs", { messages: foundMessages,
                          user: req.session.user });
    })
    .catch(function(err) {
      res.status(500).send(err);
    }); 
});

module.exports = mygabsRouter;