const ApiKey = "d63e9091b35c3a3727f10c55dae61216";
const ApiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const WeatherIcon = document.querySelector(".weather-icon");


async function checkweather(city) {
    console.log("It is working")
 const response = await fetch(`${ApiURL}${city}&appid=${ApiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else{
        var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if(data.weather[0].main == "Clouds"){
        WeatherIcon.src = "img/cloud.png";
    }
    else if (data.weather[0].main == "Clear") {
        WeatherIcon.src = "img/clear.png";
    } 
    else if(data.weather[0].main == "Rain"){
        WeatherIcon.src = "img/rain.png";
    }
    else if (data.weather[0].main == "Drizzle") {
        WeatherIcon.src = "img/drizzle.png";
    }
    else if (data.weather[0].main == "Snow") {
        WeatherIcon.src = "img/snow.png";
    }
    else if (data.weather[0].main == "Mist") {
        WeatherIcon.src = "img/mist.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".enter").style.display = "none";
    document.querySelector(".error").style.display = "none";

    }

    
}

searchBtn.addEventListener("click", () => {
    checkweather(searchBox.value);
})