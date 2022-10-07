let theDate = moment().format('LL');
document.getElementById("momentDate").innerHTML = theDate;

let searchBtn=document.getElementById('search-btn');

let apiKey ="ec494eef8fd8461dc250656042aa352f";
let weatherData = "https://api.openweathermap.org/data/2.5/forecast?id=524901&appid=" + "ec494eef8fd8461dc250656042aa352f";

fetch(weatherData, {
  method: 'GET', //GET is the default.
  credentials: 'same-origin', // include, *same-origin, omit
  redirect: 'follow', // manual, *follow, error
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
