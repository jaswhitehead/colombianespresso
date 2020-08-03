var db = require("../models");
var axios = require("axios");

var env = require("dotenv");
const { response } = require("express");

env.config();

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

  app.get("/api/getWeather/:city?", (req, res) => {
      let weatherData = async (city) => {
       return await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=${process.env.WEATHER_ID}`)
        .then(data => {return data})
        .catch(error => {return error});
      };
     res.json(weatherData(req.params.city));
     console.log(weatherData(req.params.city));
     });
};
