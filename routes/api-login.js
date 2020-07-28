//Login stuff?
 //login route
 var db = require("../models");
const passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

 module.exports = function(app)
 //authentication
 { app.post('/login',   passport.authenticate('local', { successRedirect: '/',
        failureRedirect: '/login',
        })
);


// Create a new user
app.post("/api/signup", function(req, res) {
    db.User.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });
}


//  app.post('/auth', function(request, response) {
// 	var username = request.body.username;
// 	var password = request.body.password;
// db.User.findOne({
// 	where: {
// 	  username: username,
// 	  user_password: password
// 	}
//   }).then(function(request, response) {
// 	if (response.length > 0) {
// 		request.session.loggedin = true;
// 		request.session.username = username;
// 		response.redirect('/');
// 	} else {
// 		response.send('Incorrect Username and/or Password!');
// 	}			
// 	response.end();
// });
// });


// app.post('/auth', function(request, response) {
// 	var username = request.body.username;
// 	var password = request.body.password;
// 	if (username && password) {
// 		connection.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
// 			if (results.length > 0) {
// 				request.session.loggedin = true;
// 				request.session.username = username;
// 				response.redirect('/home');
// 			} else {
// 				response.send('Incorrect Username and/or Password!');
// 			}			
// 			response.end();
// 		});
// 	} else {
// 		response.send('Please enter Username and Password!');
// 		response.end();
// 	}
// });

// app.get('/', function(request, response) {
// 	if (request.session.loggedin) {
// 		response.send('Welcome back, ' + request.session.username + '!');
// 	} else {
// 		response.send('Please login to view this page!');
// 	}
// 	response.end();
// });