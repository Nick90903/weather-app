import { getDate } from "date-fns";
import { addListeners } from "./buttonHandler";
import { updateDaily, updateWeekly } from "./dom";

const apiKey = "148038350c8c51c279a4db7eee4a3ad5";

async function fetchLocationData() {
  const input = document.querySelector("#locationInput");
  let temp = "flint";
  const response = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${temp}&limit=2&appid=${apiKey}`,
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

export { fetchLocationData };
