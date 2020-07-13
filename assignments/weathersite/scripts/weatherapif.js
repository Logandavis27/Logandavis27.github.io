
var weatherObject= new XMLHttpRequest
weatherObject.open('GET','//api.openweathermap.org/data/2.5/forecast?id=4759986&appid=95844369563c957cf2f66f5bcc8c7923&units=imperial',true);
weatherObject.send();
weatherObject.onload= function() {
    var weatherInfo= JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);
    document.getElementById('place').innerHTML= weatherInfo.city.name;
    document.getElementById('dayOneTemp').innerHTML= weatherInfo.list[0].main.temp;
    document.getElementById('weatherDescOne').innerHTML= weatherInfo.list[0].weather[0].main;
    document.getElementById('highTemp').innerHTML= weatherInfo.list[0].main.temp_max;
    document.getElementById('lowTemp').innerHTML= weatherInfo.list[0].main.temp_min;
    document.getElementById('currentWind').innerHTML= weatherInfo.list[0].wind.speed;

    var iconcode= weatherInfo.list[0].weather[0].icon;
    var icon_path= "//openweathermap.org/img/w/"+ iconcode +".png";
    document.getElementById('weather_icon1').src= icon_path;

    document.getElementById('dayTwoTemp').innerHTML= weatherInfo.list[7].main.temp;
    document.getElementById('weatherDescTwo').innerHTML= weatherInfo.list[7].weather[0].main;
    var iconcode= weatherInfo.list[7].weather[0].icon;
    var icon_path= "//openweathermap.org/img/w/"+ iconcode +".png";
    document.getElementById('weather_icon2').src= icon_path;

    document.getElementById('dayThreeTemp').innerHTML= weatherInfo.list[15].main.temp;
    document.getElementById('weatherDescThree').innerHTML= weatherInfo.list[15].weather[0].main;
    var iconcode= weatherInfo.list[15].weather[0].icon;
    var icon_path= "//openweathermap.org/img/w/"+ iconcode +".png";
    document.getElementById('weather_icon3').src= icon_path;

    document.getElementById('dayFourTemp').innerHTML= weatherInfo.list[23].main.temp;
    document.getElementById('weatherDescFour').innerHTML= weatherInfo.list[23].weather[0].main;
    var iconcode= weatherInfo.list[23].weather[0].icon;
    var icon_path= "//openweathermap.org/img/w/"+ iconcode +".png";
    document.getElementById('weather_icon4').src= icon_path;

    document.getElementById('dayFiveTemp').innerHTML= weatherInfo.list[31].main.temp;
    document.getElementById('weatherDescFive').innerHTML= weatherInfo.list[31].weather[0].main;
    var iconcode= weatherInfo.list[31].weather[0].icon;
    var icon_path= "//openweathermap.org/img/w/"+ iconcode +".png";
    document.getElementById('weather_icon5').src= icon_path;

    document.getElementById('daySixTemp').innerHTML= weatherInfo.list[38].main.temp;
    document.getElementById('weatherDescSix').innerHTML= weatherInfo.list[38].weather[0].main;
    var iconcode= weatherInfo.list[38].weather[0].icon;
    var icon_path= "//openweathermap.org/img/w/"+ iconcode +".png";
    document.getElementById('weather_icon6').src= icon_path;
}
