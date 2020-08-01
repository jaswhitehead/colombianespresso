// require("dotenv").config();

// // Import the API keys
// var keys = require("./keys");


// var city = "Murfreesboro"

// Attempt at making submit button work
// var city = "";

$(document).ready(function(){
$("#search_button").on("click", function(event){
    event.preventDefault();
    var city = $("#search-term").val().trim();
    $(".weather").text("");
    $(".temp").text("");
    $(".description").text("");
    $(".feelsLike").text("");
    $(".windSpeed").text("");
    $(".humidity").text("");
console.log(city)


$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&APPID=2bb930dcd6a209c3048a37004c1534d6", function(data) {
    console.log(data);
    
    var icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";

    var temp = Math.floor(data.main.temp);
    var weather = data.weather[0].main;
    var description = data.weather[0].description;
    var feelsLike = data.main.feels_like;
    var humidity = data.main.humidity;
    var windSpeed = data.wind.speed;

    $('.icon').attr('src', icon);
    $('.weather').append(weather);
    $('.temp').append(temp);
    $('.description').append(description);
    $('.feelsLike').append(feelsLike);
    $('.windSpeed').append(windSpeed + ' mph');
    $('.humidity').append(humidity + '%');


