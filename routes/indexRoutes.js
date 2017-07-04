var express  = require('express');
var indexRouter = express.Router();

// indexRouter.get("/", function(req, res) {
//   res.render('index');
// });

function checkAuth(req, res, next) {
  if (!req.session.user) {
    return res.redirect("/login");
  } else {
    next();
  }
}

// ROUTES
indexRouter.get("/", checkAuth, function(req, res) {
  res.render("index", { user: req.session.user });
});

module.exports = indexRouter;