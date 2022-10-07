let theDate = moment().format('LL');
document.getElementById("momentDate").innerHTML = theDate;

let searchBtn=document.getElementById('search-btn');

let apiKey ="ec494eef8fd8461dc250656042aa352f";
let weatherData = "https://api.openweathermap.org/data/2.5/weather?q=" + citySearched+ "&appid=" + apiKey";

fetch(weatherData)
    .then(function(response){
        return response.json()
    })
    .then(function(weatherNow){

        let presentTemp=weatherNow.main.temp;
        let presentWindSpeed=weatherNow.wind.speed;
        let presenthumidity=weatherNow.main.humidity;


        let currentCity= document.getElementById('currentCity')
        let currentTemp=document.getElementById('currentTemperature')
        let currentWind=document.getlElementById('currentWindSpeed')
        let currentHumidity= document.getElementById('currentHumidity')
         
    })