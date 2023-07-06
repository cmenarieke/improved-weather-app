function displayWeather(response) {
  console.log(response.data);

  let cityName = document.querySelector(".city-name");
  cityName.innerHTML = response.data.city;
  let currentTemp = document.querySelector(".current-temp");
  currentTemp.innerHTML = Math.round(response.data.temperature.current);
  let weatherconditions = document.querySelector(".weather-condition");
  weatherconditions.innerHTML = response.data.condition.description;
  let humidity = document.querySelector(".humidity");
  humidity.innerHTML = response.data.temperature.humidity;
  let windspeed = document.querySelector(".windspeed");
  windspeed.innerHTML = Math.round(response.data.wind.speed);
}

let apiKey = "0cb9ed087t764d66183dfo493b5aadf0";
let city = "Honolulu";
let unit = "imperial";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${unit}`;

axios.get(apiUrl).then(displayWeather);
