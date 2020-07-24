var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/getPost", function(req, res) {
    db.createPost.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/post", function(req, res) {
    db.createPost.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/post/:id", function(req, res) {
    db.createPost.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};
