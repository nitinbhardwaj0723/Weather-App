async function getWeather(){

let city = document.getElementById("city").value;

let apiKey = "9912efa143105319c23bbe4e837b9dda";

let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

let response = await fetch(url);

let data = await response.json();

console.log(data);

if(data.cod === 200){

document.getElementById("cityName").innerHTML = data.name;

document.getElementById("temp").innerHTML = data.main.temp + " °C";

document.getElementById("humidity").innerHTML = data.main.humidity + "%";

document.getElementById("wind").innerHTML = data.wind.speed + " km/h";

let icon = data.weather[0].icon;

document.getElementById("icon").src = `https://openweathermap.org/img/wn/${icon}@2x.png`;

}
else{

document.getElementById("temp").innerHTML = "City Not Found";

}

}