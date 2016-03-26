// get current location
$.get("http://ipinfo.io", function (location) {
        
        $("#city").html("" + location.city + ", " + location.country);
var userLocation = localWeather(location.loc);
 
}, "jsonp");

// get local weather using lat and lon 


function localWeather(loc) {
    lat = loc.split(",")[0] // creates an array and accesses first element: lat
    lon = loc.split(",")[1] // creates an array and accesses second element: lon
    
$.get('http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&units=metric&APPID=02918363b18cd7a867eb1fd02dd3e193', 
      function(weather) {
  
  $("#weather").html("Weather: " + weather.weather[0].description);
  $("#temperature").html("Temperature: " + Math.round(weather.main.temp) + " °C");
  
  $("#icon").html('<img src=http://openweathermap.org/img/w/' + weather.weather[0].icon + '.png>');

}, "jsonp")
};
 

  



    
