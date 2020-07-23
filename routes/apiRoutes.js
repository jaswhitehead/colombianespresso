var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/getPost", function(req, res) {
    db.createpost.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/post", function(req, res) {
    db.createpost.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};
