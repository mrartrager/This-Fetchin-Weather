let theDate = moment().format('LL');
document.getElementById("momentDate").innerHTML = theDate;

let apiKey ="ec494eef8fd8461dc250656042aa352f";
let weatherData = "https://api.openweathermap.org/data/2.5/forecast?id=524901&appid=" + "ec494eef8fd8461dc250656042aa352f";