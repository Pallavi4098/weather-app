console.log("hello world");
const api_url = "https://api.weatherapi.com/v1/current.json?key=e8787e679547406a9ff161257242106&q=";
const api_key = "e8787e679547406a9ff161257242106";
const searchBox = document.querySelector(".searchBoxInput");
const searchButton = document.querySelector(".searchBoxButton");
const weatherIcon = document.querySelector(".weather-icon");
async function checkWeather(city) {
    const response = await fetch(api_url + city + `&appid=${api_key}`);
    var data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.location.name;
    document.querySelector(".temp").innerHTML = Math.round(data.current.temp_c) + "°C";
    document.querySelector(".humidity").innerHTML = data.current.humidity + "%";
    document.querySelector(".wind").innerHTML = data.current.wind_kph + "km/h";
    if (data.current.condition.text === "Mist") {
        weatherIcon.src = "images/image1/mist.png";
    }
    else if (data.current.condition.text === "Rain") {
        weatherIcon.src = "images/image1/rain.png";

    }
    else if (data.current.condition.text === "Snow") {
        weatherIcon.src = "images/image1/snow.png"
    }
    else if (data.current.condition.text === "Clouds") {
        weatherIcon.src = "images/image1/clouds.png"
    }
    else if (data.current.condition.text === "Drizzle") {
        weatherIcon.src = "images/image1/drizzle.png"
    }
    
}

searchButton.addEventListener("click", () => {
    checkWeather(searchBox.value);

}
)
