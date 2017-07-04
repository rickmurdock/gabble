
const express  = require('express');
const loginRouter = express.Router();
const models = require("../models");

loginRouter.get("/", function(req, res) {
  res.render('login');
});

loginRouter.post("/", function(req, res) {
  if (!req.body || !req.body.username || !req.body.password) {
    return res.redirect("login");
  }

  var requestingUser = req.body;
  var userRecord;

  models.user
  .findOne({
      where: {
        username: requestingUser.username,
        password: requestingUser.password
      }
    }).then(function (user) {
      if (user) {
        console.log("USER is FOUND");
        console.log("----", user.displayname);
        req.session.user = {
          username: user.username, 
          displayName: user.displayname
        }
        return res.render("index", { user : req.session.user});
      } else {
        console.log("USER NOT FOUND");
        return res.redirect("login");
      }
    });



  // users.forEach(function(item) {
  //   if (item.username === requestingUser.username) {
  //     userRecord = item;
  //   }
  // });

  // if (!userRecord) {
  //   return res.redirect("/login");
  // }


});

module.exports = loginRouter;