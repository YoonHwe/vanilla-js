const city = document.querySelector("#weather span:first-child");
const weather = document.querySelector("#weather span:last-child");
const API_KEY = "68b6cfc53b3a318fcc1da44f6ed04f32";

function onGeoSuccess(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            city.innerText = `You are now in ${data.name}!`;
            weather.innerText = `The weather is ${data.weather[0].main} with ${data.main.temp} degree.`;
        });
}

function onGeoFail(){
    alert("Cannot Find Where you are");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoFail);