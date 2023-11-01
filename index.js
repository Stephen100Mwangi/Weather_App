let searchEl = document.querySelector("#search");
let textField = document.querySelector("#searchBar");
const apiKey = "551e24112fa184689a71b359a4cd7c9e";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let windSpeed = document.querySelector(".container #humidWind #wind p");
let humidity = document.querySelector(".container #humidWind #humidity p");
let temperature = document.querySelector(".container .temperature h2");
let countryCity = document.querySelector(".container .temperature h3");
let container = document.querySelector(".container .sunRain span");
let weatherIcon = document.querySelector(".container .weatherIcon img")

async function checkWeather(city){
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);
    if (response.status == 404){
        alert("No such city found");
    }

    // The data variable has all the data about the city
    var data = await response.json();

    // Displaying data on our screen
    countryCity.innerHTML = data.name;
    temperature.innerHTML =Math.floor(data.main.temp) + "&degC";
    humidity.innerHTML = data.main.humidity + " %";
    windSpeed.innerHTML = data.wind.speed + " mph";

    let weather = data.weather[0].main;
    switch (weather) {
        case "Clouds":
            weatherIcon.src = "images/clouds.jpeg";
            break;
        case "Clear":
            weatherIcon.src = "images/sun.png";
            break;
        case "Mist":
            weatherIcon.src = "images/mist.jpeg";
            break;
        case "Drizzle":
            weatherIcon.src = "images/drizzle.jpeg";
            break;
        case "Rain":
            weatherIcon.src = "images/rain.png";
            break;
        default:
            weatherIcon.src = "images/sunCloud.png"
            break;
    }
    document.querySelector(".container").style.visibility = "visible";

}

searchEl.addEventListener("click",()=>{
    if (textField.value === "") {
        alert('You must input name of a city')
    }else{
        checkWeather(textField.value);
    }

});