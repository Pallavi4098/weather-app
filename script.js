console.log("hello world");
const api_url= "https://api.weatherapi.com/v1/current.json?key=e8787e679547406a9ff161257242106&q=";
const api_key= "e8787e679547406a9ff161257242106";
const searchBox= document.querySelector(".searchBoxInput");
const searchButton= document.querySelector("searchBoxButton");
async function checkWeather(city){
    const response=await fetch(apiUrl +city+ `&appid=${apiKey}`);
    var data=await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML=data.location.name;
    document.querySelector(".temp").innerHTML=Math.round(data.current.temp_c)+"°C";
    document.querySelector(".humidity").innerHTML=data.current.humidity+"%";
    document.querySelector(".wind").innerHTML=data.current.wind_kph+"km/h";
}
searchButton.addEventListener("click",() => {
    checkWeather(searchBox.value);
  
}
)
