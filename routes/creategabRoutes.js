var express  = require('express');
var creategabRouter = express.Router();

creategabRouter.get("/", function(req, res) {
  res.render('creategab');
});

module.exports = creategabRouter;