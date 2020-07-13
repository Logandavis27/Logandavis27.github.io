var weatherObject= new XMLHttpRequest
weatherObject.open('GET','//api.openweathermap.org/data/2.5/weather?id=4759986&appid=95844369563c957cf2f66f5bcc8c7923&units=imperial',true);
weatherObject.send();
weatherObject.onload= function() {
    var weatherInfo= JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);
    document.getElementById('place').innerHTML= weatherInfo.name;
    document.getElementById('weatherDesc').innerHTML= weatherInfo.weather[0].main;
    document.getElementById('highTemp').innerHTML= weatherInfo.main.temp_max;
    document.getElementById('lowTemp').innerHTML= weatherInfo.main.temp_min;
    document.getElementById('currentTemp').innerHTML= weatherInfo.main.temp;
    document.getElementById('currentWind').innerHTML= weatherInfo.wind.speed;
    var iconcode= weatherInfo.weather[0].icon;
    var icon_path= "//openweathermap.org/img/w/"+ iconcode +".png";
    document.getElementById('weather_icon').src= icon_path;
}
