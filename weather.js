// Feature #2
function searchCity(city) {
  let apiKey = "4f894c5c0cfd49cc623438c61c83e0ef";
  let units = "imperial";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showTemperature);
}
function handleSubmit(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#search-city");
  let searchResult = cityInput.value;
  let searchAnswer = document.querySelector("#now-city");
  searchAnswer.innerHTML = searchResult;
  searchCity(searchResult);
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);
searchCity("Oklahoma City");
// Feature #1
let now = new Date();
let date = now.getDate();
let hour = now.getHours();
let minute = now.getMinutes();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let dia = document.querySelector("#currentDate");
let hora = document.querySelector("#currentTime");
dia.innerHTML = `${day}, ${hour}:${minute}`;
function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let city = response.data.name;
  let h1 = document.querySelector("h1");
  h1.innerHTML = city;
  document.querySelector(".number").innerHTML = temperature;

  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#description").innerHTML =
    response.data.weather[0].main;
}
function currentLocation(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiKey = "4f894c5c0cfd49cc623438c61c83e0ef";
  let units = "imperial";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showTemperature);
}
navigator.geolocation.getCurrentPosition(currentLocation);
