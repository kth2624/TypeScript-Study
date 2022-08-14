const weather = document.querySelector("#weather :nth-child(1)");
const temperature = document.querySelector("#weather :nth-child(2)");
const city = document.querySelector("#weather :nth-child(3)");
const API_KEY = "4f2dd5bac831776540973f87ea282e42";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log("You live in", lat, lon);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = `위치 ${data.name}`;
      weather.innerText = `날씨 ${data.weather[0].main}`;
      temperature.innerText = `기온 ${data.main.temp}`;
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);