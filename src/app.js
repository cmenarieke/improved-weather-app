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
  let lastUpdated = document.querySelector(".todays-date-time");
  lastUpdated.innerHTML = showDate(response.data.time * 1000);
}

let apiKey = "0cb9ed087t764d66183dfo493b5aadf0";
let city = "Honolulu";
let unit = "imperial";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${unit}`;

axios.get(apiUrl).then(displayWeather);
