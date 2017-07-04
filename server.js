const express = require("express");
const expressValidator = require("express-validator");
const bodyParser = require('body-parser');
const mustacheExpress = require('mustache-express');
const port = process.env.PORT || 8000;
const models = require("./models");
const indexRouter = require('./routes/indexRoutes');
const loginRouter = require('./routes/loginRoutes');
const signupRouter = require('./routes/signupRoutes');
const likesRouter = require('./routes/likesRoutes');
const creategabRouter = require('./routes/creategabRoutes');
const app = express();

// RENDER ENGINE
app.engine("mustache", mustacheExpress());
app.set("views", "./views");
app.set("view engine", "mustache")

//MIDDLEWARE
app.use("/", express.static(__dirname + "/views"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// ROUTES
app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/signup', signupRouter);
app.use('/likes', likesRouter);
app.use('/creategab', creategabRouter);

// LISTENER
app.listen(port, function() {
  console.log('Babble server is running on port: ', port);
});