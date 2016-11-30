"use strict";

// console.log("hello, World!");
// console.log(document.title);
/*  These both work, so I may continue  */

// jquery
$(document).ready(function(){

  var api = "http://api.openweathermap.org/data/2.5/weather?lat=40.576084&lon=-111.681688&appid=f52141d316d5fe9ec4f644247441dfa9&units=imperial&mode=html";
  // var weatherType = data.weather.description;
  var city = data.name;
  // var windSpeed = data.wind.id;
  // $.getJSON(api, function(data) {
    // console.log(city);
    // $('#city').html(city)
    // $('#weatherType').html(weatherType)

    // console.log('the wind speed is: ', windSpeed);
    // document.getElementById("data").innerHTML;
// console.log(city);
function myFunction() {
    var str = "Get the weather!";
    var result = str.link("http://api.openweathermap.org/data/2.5/weather?lat=40.576084&lon=-111.681688&appid=f52141d316d5fe9ec4f644247441dfa9&units=imperial&mode=html");
    document.getElementById("data").innerHTML = result;
}
});
