var db = require("../models");
var path = require('path');


module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.createPost.findAll({}).then(function(posts) {
      res.render("index", {
        msg: "Welcome back to the Coffee House!",
        post: posts
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/post/:id", function(req, res) {
    db.createPost.findOne({ where: { id: req.params.id } }).then(function(socialPost) {
      res.render("example", {
        post: socialPost
      });
    });
  });
  // Load classifieds page
  app.get("/classifieds", function(req, res) {
    db.Classified.findAll({}).then(function(adds) {
      res.render("classifieds", {
        add: adds
      });
    });
  });

  // one classified
  app.get("/classifieds/:id", function(req, res) {
    db.Classified.findOne({ where: { id: req.params.id } }).then(function(adds) {
      res.render("add", {
        add: adds
      });
    });
  });


  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
