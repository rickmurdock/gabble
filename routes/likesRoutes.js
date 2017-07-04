var express  = require('express');
var likesRouter = express.Router();

likesRouter.get("/", function(req, res) {
  res.render('likes');
});

module.exports = likesRouter;