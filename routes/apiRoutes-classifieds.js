var db = require("../models");

module.exports = function(app) {
  // Get all examples

  app.get("/api/getClassifieds", function(req, res) {
    var query = {};
    if(req.query.userID){
      query.userID = req.query.userID
    }
    db.Classified.findAll({
      where: query
    }).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/classifieds", function(req, res) {
    db.Classified.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/classifieds/:id", function(req, res) {
    db.Classified.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};
