//displaying current date using momentJS
let theDate = moment().format('LL');
document.getElementById("momentDate").innerHTML = theDate;

let searchBtn=document.getElementById("searchBtn");

// let citySearched= "Milwaukee";  ${userSearchInput}  use this for search input? or searchbutton.addeventlistner function



// api key and "custom" URL 
const apiKey ="ec494eef8fd8461dc250656042aa352f";


let searchHistory= [];

function storeCityName (city){
    searchHistory.push(city)
    console.log(searchHistory)
localStorage.setItem("cityName", searchHistory)
}

function getSearchHistory(){

    let history= [localStorage.getItem("cityName")]
    
    let searchHistorydiv=document.getElementById("searchHistory")
    searchHistorydiv.innerHTML=""
    for (let i=0; i<history.length; i++){
        let paragraph= document.createElement("p")
        paragraph.innerHTML=history[i];
        searchHistorydiv.append(paragraph)
    }
}


getSearchHistory()

function getWeatherData(citySearched){

    storeCityName(citySearched)

    getSearchHistory()


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

let getLatLon= "https://api.openweathermap.org/geo/1.0/direct?q=" + citySearched + "&limit=1&appid=" + apiKey


fetch(getLatLon)
    .then(function(response2){
        return response2.json()
    })
    .then(function (latLong){
        let locationLat= latLong[0].lat    
        let locationLong= latLong[0].lon
        let fiveDayForecast= "https://api.openweathermap.org/data/2.5/forecast?lat="+locationLat+"&lon="+locationLong+"&appid="+apiKey+"&units=imperial" 

        
        fetch(fiveDayForecast)
        .then(function(response3){
            return response3.json()
        })  
        .then(function(fiveDay) {
            console.log(fiveDay)

            // first card data 
        let forecastOneDate= moment().add(1,"d").format("M/D/YYYY");
        let oneTemp= fiveDay.list[0].main.temp
        let oneWind= fiveDay.list[0].wind.speed
        let oneHumidity= fiveDay.list[0].main.humidity

        let dayOneCard= document.getElementById("boxDate0");
        let dayOneTemp= document.getElementById("temp0");
        let dayOneWind= document.getElementById("wind0");
        let dayOneHumidity= document.getElementById("hum0");

        dayOneCard.textContent= forecastOneDate;
        dayOneTemp.textContent= "Temp: "+oneTemp;
        dayOneWind.textContent= "Wind: "+oneWind;
        dayOneHumidity.textContent= "Humidity: "+oneHumidity;


        // second card data
        let forecastTwoDate= moment().add(2,"d").format("M/D/YYYY");
        let twoTemp= fiveDay.list[1].main.temp
        let twoWind= fiveDay.list[1].wind.speed
        let twoHumidity= fiveDay.list[1].main.humidity

        let dayTwoCard= document.getElementById("boxDate1");
        let dayTwoTemp= document.getElementById("temp1");
        let dayTwoWind= document.getElementById("wind1");
        let dayTwoHumidity= document.getElementById("hum1");

        dayTwoCard.textContent= forecastTwoDate;
        dayTwoTemp.textContent= "Temp: "+twoTemp;
        dayTwoWind.textContent= "Wind: "+twoWind;
        dayTwoHumidity.textContent= "Humidity: "+twoHumidity;


        // third card data
        let forecastThreeDate= moment().add(3,"d").format("M/D/YYYY");
        let threeTemp= fiveDay.list[2].main.temp
        let threeWind= fiveDay.list[2].wind.speed
        let threeHumidity= fiveDay.list[2].main.humidity

        let dayThreeCard= document.getElementById("boxDate2");
        let dayThreeTemp= document.getElementById("temp2");
        let dayThreeWind= document.getElementById("wind2");
        let dayThreeHumidity= document.getElementById("hum2");

        dayThreeCard.textContent= forecastThreeDate;
        dayThreeTemp.textContent="Temp: "+ threeTemp;
        dayThreeWind.textContent="Wind: "+ threeWind;
        dayThreeHumidity.textContent= "Humidity: "+threeHumidity;


        // fourth card data
        let forecastFourDate= moment().add(4,"d").format("M/D/YYYY");
        let fourTemp= fiveDay.list[3].main.temp
        let fourWind= fiveDay.list[3].wind.speed
        let fourHumidity= fiveDay.list[3].main.humidity

        let dayFourCard= document.getElementById("boxDate3");
        let dayFourTemp= document.getElementById("temp3");
        let dayFourWind= document.getElementById("wind3");
        let dayFourHumidity= document.getElementById("hum3");

        dayFourCard.textContent= forecastFourDate;
        dayFourTemp.textContent="Temp: "+fourTemp;
        dayFourWind.textContent="Wind: "+fourWind;
        dayFourHumidity.textContent="Humidity: "+fourHumidity;



        // fifth card data
        let forecastFiveDate= moment().add(5,"d").format("M/D/YYYY");
        let fiveTemp= fiveDay.list[4].main.temp
        let fiveWind= fiveDay.list[4].wind.speed
        let fiveHumidity= fiveDay.list[4].main.humidity

        let dayFiveCard= document.getElementById("boxDate4");
        let dayFiveTemp= document.getElementById("temp4");
        let dayFiveWind= document.getElementById("wind4");
        let dayFiveHumidity= document.getElementById("hum4");

        dayFiveCard.textContent= forecastFiveDate;
        dayFiveTemp.textContent= "Temp: "+fiveTemp;
        dayFiveWind.textContent= "Wind: "+fiveWind;
        dayFiveHumidity.textContent= "Humidity: "+fiveHumidity;

        })
    })
}

    


searchBtn.addEventListener('click', function(){
    let cityName = document.getElementById("citySearch").value
    console.log(cityName);
    getWeatherData(cityName)
    })


    // searchBtn.addEventListener('click', outterFunction)

    // function outterFunction(){

    // }
