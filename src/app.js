function refreshWeatherData(response) {
  console.log(response.data);
}

function searchCity(city) {
  let apiKey = "46a7o7054af22ba1t49c85122b081838";
  let apiUrl = `"https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric"`;
  axios.get(apiUrl).then(refreshWeatherData);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  let cityWeatherElement = document.querySelector("#city-weather");
  cityWeatherElement.innerHTML = searchInput.value;
  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);
