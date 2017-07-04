const express  = require('express');
const creategabRouter = express.Router();
const shared = require('../public/sharedFunctions.js');
const models = require("../models");

creategabRouter.get("/", shared.checkAuth, function(req, res) {
  res.render('creategab', { user : req.session.user});
});

module.exports = creategabRouter;