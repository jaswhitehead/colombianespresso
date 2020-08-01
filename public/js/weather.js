// require("dotenv").config();

// // Import the API keys
// var keys = require("./keys");


var city = "Murfreesboro"

// Attempt at making submit button work
// var city = "";

// $("#search_button").on("click", function(event){
//     event.preventDefault();
//     var city = $("#search-term").val();




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

    // console.log(description);

});

//Another idea
// function searchWeather(){

//     var search =$("#search-term").val();
    
//     var base_url = "http://api.openweathermap.org/data/2.5/weather?q=" + search
//     var path = "&units=imperial&APPID=2bb930dcd6a209c3048a37004c1534d6"
//     $.ajax({
//       url: base_url + path,
//       dataType: 'json',
//       success: function(data) {
//           console.log(data)