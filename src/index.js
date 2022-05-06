import { searchButton } from "./buttonHandler";

const apiKey = "148038350c8c51c279a4db7eee4a3ad5";

async function fetchLocationData() {
  const input = document.querySelector("#locationInput");
  const response = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${input.value}&limit=2&appid=${apiKey}`,
    { mode: "cors" }
  );
  const returnData = await response.json();
  const lat = returnData[0].lat;
  const lon = returnData[0].lon;
  console.log(`Location Data: ${lat}, ${lon}`);
  fetchWeatherData(lat, lon);
}

async function fetchWeatherData(lat, lon) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`,
    { mode: "cors" }
  );
  const returnData = await response.json();
  console.log(returnData);
}

searchButton();

export { fetchLocationData };
