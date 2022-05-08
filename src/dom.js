import { da } from "date-fns/locale";
import { capitalize, convert3Day, retrieveDate } from "./utilities";

// Draws todays weather.
async function updateDaily(data) {
  clearDom(".dateContainer");
  clearDom(".weatherContainer");
  // Gets full date information
  let date = retrieveDate(data.current.dt, data.timezone_offset);

  //Starts dom manipulation
  const container = document.querySelector(".dayContainer");
  const dateContainer = document.createElement("div");
  dateContainer.classList.add("dateContainer");

  // Time dom drawing
  const dayName = document.createElement("p");
  dayName.classList.add("dayName");
  dayName.textContent = convert3Day(date);
  dateContainer.appendChild(dayName);

  const dateNumber = document.createElement("p");
  dateNumber.classList.add("dateNumber");
  dateNumber.textContent = date.slice(5, 16);
  dateContainer.appendChild(dateNumber);

  const time = document.createElement("p");
  time.classList.add("time");
  time.textContent = date.slice(17, 25);
  dateContainer.appendChild(time);

  container.appendChild(dateContainer);

  // Weather dom drawing
  const weatherContainer = document.createElement("div");
  weatherContainer.classList.add("weatherContainer");

  const temp = document.createElement("p");
  temp.classList.add("temp");
  temp.textContent = "Temperature: " + data.current.temp + "°";
  weatherContainer.appendChild(temp);

  const feelsLike = document.createElement("p");
  feelsLike.classList.add("feelsLike");
  feelsLike.textContent = "Real Feel: " + data.current.feels_like + "°";
  weatherContainer.appendChild(feelsLike);

  const humidity = document.createElement("p");
  humidity.classList.add("humidity");
  humidity.textContent = "Humidity: " + data.current.humidity;
  weatherContainer.appendChild(humidity);

  const forecast = document.createElement("p");
  forecast.classList.add("forecast");
  forecast.textContent = capitalize(data.current.weather[0].description);
  weatherContainer.appendChild(forecast);

  container.appendChild(weatherContainer);
}

// Draws weekly weather
function updateWeekly(data) {
  clearDom(".weeklyItems");
  for (let i = 1; i <= 7; i++) {
    let date = retrieveDate(data.daily[i].dt, data.timezone_offset);

    const container = document.querySelector(`.day${i}`);

    const daytitle = document.createElement("p");
    daytitle.classList.add("dayTitle");
    daytitle.classList.add("weeklyItems");
    daytitle.textContent = convert3Day(date);
    container.appendChild(daytitle);

    const high = document.createElement("p");
    high.classList.add("high");
    high.classList.add("weeklyItems");
    high.textContent = data.daily[i].temp.max;
    container.appendChild(high);

    const low = document.createElement("p");
    low.classList.add("low");
    low.classList.add("weeklyItems");
    low.textContent = data.daily[i].temp.min;
    container.appendChild(low);

    const description = document.createElement("p");
    description.classList.add("dailyDescription");
    description.classList.add("weeklyItems");
    description.textContent = capitalize(data.daily[i].weather[0].description);
    container.appendChild(description);
  }
}

function clearDom(className) {
  let temp = document.querySelectorAll(className);

  temp.forEach((element) => {
    element.remove();
  });
}

export { updateWeekly, updateDaily };
