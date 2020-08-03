require("dotenv").config();
var express = require("express");
var exphbs = require("express-handlebars");
var {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')
var Handlebars = require('handlebars')
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');
const passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var db = require("./models");

var app = express();
var PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());



// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main",
    handlebars: allowInsecurePrototypeAccess(Handlebars)
  })
);
app.set("view engine", "handlebars");

// Routes
require("./routes/apiRoutes-createPost")(app);
require("./routes/apiRoutes-classifieds")(app);
require("./routes/htmlRoutes")(app);
require("./routes/api-login")(app, passport);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

//passport login authentication
passport.serializeUser(function (users, done) {
	return done(null, users.id);
	

});
passport.deserializeUser(function(user, done) {
	done(null, user);
  });

//checking stuff
passport.use(new LocalStrategy({
    username: ' ',
    user_password: ' '
  },
  function(username, password, done) {
	db.User.findOne({ where: { username: username, user_password: password } })
	.then(function (users) {
		if (!users) {
			return done(null, false, { message: 'Incorrect username.' });
			
		}
		else if (!users.user_password === password) {
			return done(null, false, { message: 'Incorrect password.' });
		}
		return done(null, users);
	})
	.catch(err => done(err));
}

));


// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;



