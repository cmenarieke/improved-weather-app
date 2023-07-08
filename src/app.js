function showDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  let weekday = days[date.getDay()];
  return `Last updated on ${weekday} at ${hours}:${minutes}`;
}

let fahrenheitTemp = null;

function displayWeather(response) {
  console.log(response.data);
  let cityName = document.querySelector(".city-name");
  cityName.innerHTML = response.data.city;
  let currentTemp = document.querySelector(".current-temp");
  currentTemp.innerHTML = Math.round(response.data.temperature.current);

  fahrenheitTemp = response.data.temperature.current;

  let weatherconditions = document.querySelector(".weather-condition");
  weatherconditions.innerHTML = response.data.condition.description;
  let humidity = document.querySelector(".humidity");
  humidity.innerHTML = response.data.temperature.humidity;
  let windspeed = document.querySelector(".windspeed");
  windspeed.innerHTML = Math.round(response.data.wind.speed);
  let lastUpdated = document.querySelector(".todays-date-time");
  lastUpdated.innerHTML = showDate(response.data.time * 1000);
  let weatherIconUpdate = document.querySelector(".weather-icon");
  let iconUpdate = response.data.condition.icon;
  let altUpdate = response.data.condition.description;
  weatherIconUpdate.setAttribute(
    `src`,
    `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${iconUpdate}.png`
  );
  weatherIconUpdate.setAttribute(`alt`, `${altUpdate}`);
}

function newCitySearch(event) {
  event.preventDefault();
  let cityValue = document.querySelector(".city-input");
  search(cityValue.value);
}

function search(city) {
  let apiKey = "0cb9ed087t764d66183dfo493b5aadf0";
  let unit = "imperial";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${unit}`;
  axios.get(apiUrl).then(displayWeather);
}

function showCelsiusTemp(event) {
  event.preventDefault();
  let temperature = document.querySelector(".current-temp");
  let celsiusTemp = (fahrenheitTemp - 32) * (5 / 9);
  temperature.innerHTML = Math.round(celsiusTemp);
}

let form = document.querySelector(".search-form");
form.addEventListener("submit", newCitySearch);

let celsiusLink = document.querySelector(".celsius-link");
celsiusLink.addEventListener("click", showCelsiusTemp);
alert("hello");
search(`Honolulu`);
