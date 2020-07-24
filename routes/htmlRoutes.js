var db = require("../models");

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

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
