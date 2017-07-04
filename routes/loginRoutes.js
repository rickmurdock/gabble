
var express  = require('express');
var loginRouter = express.Router();

loginRouter.get("/", function(req, res) {
  res.render('login');
});

module.exports = loginRouter;