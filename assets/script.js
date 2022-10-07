//displaying current date using momentJS
let theDate = moment().format('LL');
document.getElementById("momentDate").innerHTML = theDate;

let searchBtn=document.getElementById('search-btn');

let citySearched= "milwaukee"; // ${userSearchInput} Possibly use this for search input


// api key and "custom" URL 
let apiKey ="ec494eef8fd8461dc250656042aa352f";
let weatherData = "https://api.openweathermap.org/data/2.5/weather?q=" + citySearched + "&appid=" + apiKey+ "&units=imperial";

// this is for the current weather of the searched city 

fetch(weatherData)
    .then(function(response){
        return response.json()
    })
    .then(function(weatherNow){

        let presentTemp=weatherNow.main.temp;
        let presentWindSpeed=weatherNow.wind.speed;
        let presenthumidity=weatherNow.main.humidity;


        let currentCity= document.getElementById('currentCity');
        let currentTemp= document.getElementById('currentTemperature');
        let currentWind= document.getElementById('currentWindSpeed');
        let currentHumidity= document.getElementById('currentHumidity');

        currentCity.textContent= citySearched+" "+theDate
        currentTemp.textContent=  presentTemp
        currentWind.textContent= presentWindSpeed
        currentHumidity.textContent= presenthumidity
    })

    //items for 5 day forecast will go down here

let getLatLon= "http://api.openweathermap.org/geo/1.0/direct?q=" + citySearched + "&limit=1&appid=" + apiKey


fetch(getLatLon)
    .then(function(response2){
        return response2.json()
    })
    .then(function (latLong){
        let locationLat= latLong[0].lat    
        let locationLong= latLong[0].lon
        let fiveDayForecast= "http://api.openweathermap.org/data/2.5/forecast?lat="+locationLat+"&lon="+locationLong+"&appid="+apiKey+"&units=imperial" 

        
        fetch(fiveDayForecast)
        .then(function(response3){
            return response3.json()
        })  
        .then(function(fiveDay) {
            console.log(fiveDay)

            // first card data
        let forecastOneDate= moment().add(1,"d").format("M/D/YYYY");
        let oneTemp= fiveDay.list[5].main.temp
        let oneWind= fiveDay.list[5].main.temp
        let oneHumidity= fiveDay.list[5].main.temp

        let dayOneCard= document.getElementById("boxDate0");
        let dayOneTemp= document.getElementById("temp0");
        let dayOneWind= document.getElementById("wind0");
        let dayOneHumidity= document.getElementById("hum0");

        dayOneCard.textContent= forecastOneDate;
        dayOneTemp.textContent= oneTemp;
        dayOneWind.textContent= oneWind;
        dayOneHumidity.textContent= oneHumidity;


        // second card data


        // third card data


        // fourth card data


        // fifth card data

        })
    })





