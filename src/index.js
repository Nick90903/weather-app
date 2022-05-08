import { addListeners } from "./buttonHandler";
import { updateDaily, updateWeekly } from "./dom";
import { capitalize } from "./utilities";

const apiKey = "148038350c8c51c279a4db7eee4a3ad5";

function getDataFromForm() {
  let input = document.querySelector("#locationInput");
  let cityName = input.value;

  if (cityName) {
    return cityName
      .replace(/(\s+$|^\s+)/g, "") // remove whitespace from begining and end of string
      .replace(/(,\s+)/g, ",") // remove any white space that follows a comma
      .replace(/(\s+,)/g, ",") // remove any white space that preceeds a comma
      .replace(/\s+/g, "+"); // replace any remaining white space with +, so it works in api call
  }
  return "";
}

async function fetchLocationData() {
  let temp = "flint";
  const response = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${temp}&limit=20&appid=${apiKey}`,
    { mode: "cors" }
  );
  const returnData = await response.json();
  const lat = returnData[0].lat;
  const lon = returnData[0].lon;
  console.log(returnData);
  console.log(`Location Data: ${lat}, ${lon}`);
  fetchWeatherData(lat, lon);
}

async function fetchWeatherData(lat, lon) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&appid=${apiKey}&units=${unit()}`,
    { mode: "cors" }
  );
  console.log(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&appid=${apiKey}&units=${unit()}`
  );
  console.log(unit());
  const returnData = await response.json();
  console.log(returnData);
  updateWeekly(returnData);
  updateDaily(returnData);
}

function unit() {
  const slider = document.querySelector("#slider");
  if (slider.checked) {
    return "imperial";
  } else {
    return "metric";
  }
}

addListeners();
fetchLocationData();

export { fetchLocationData };
