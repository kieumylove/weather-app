function displayTemperature(response) {
  let temperatureElement = document.querySelector("temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#speed");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = response.data.wind.speed;
}

let apiKey = "6881ab061dc897e22c418a72954f13c4";
let url = `https://api.openweathermap.org/data/2.5/weather?q=New Yorl&appid=${apiKey}`;
axios.get(url).then(displayTemperature);
