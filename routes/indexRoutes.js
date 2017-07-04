const express  = require('express');
const indexRouter = express.Router();
const shared = require('../public/sharedFunctions.js');
const models = require("../models");

indexRouter.get("/", shared.checkAuth, function(req, res) {
  res.render("index", { user: req.session.user });
});

module.exports = indexRouter;