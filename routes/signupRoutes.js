var express  = require('express');
var signupRouter = express.Router();

signupRouter.get("/", function(req, res) {
  res.render('signup');
});

module.exports = signupRouter;