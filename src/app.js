function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  let cityWeatherElement = document.querySelector("#city-weathers");
  cityWeatherElement.innerHTML = searchInput.value;
  console.log(cityWeatherElement);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);
