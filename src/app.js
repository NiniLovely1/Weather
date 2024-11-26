function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  let weatherCityElement = document.querySelector("#weather-city");
  weatherCityElement.innerHTML = searchInput.value;
  console.log(weatherCityElement);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);