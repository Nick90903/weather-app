import { convert3Day, retrieveDate } from "./utilities";

function updateDisplay(data) {}

// Draws todays weather.
function updateDaily(data) {
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

  container.appendChild(weatherContainer);
}

function updateWeekly(data) {
  for (let i = 1; i <= 7; i++) {
    const container = document.querySelector(`day${i}`);

    const daytitle = document.createElement("p");
    daytitle.classList.add("dayTitle");

    //retrieveDate(data.current.dt, data.timezone_offset);
    //console.log("update weekly");
  }
}

function clearDom(className) {
  let temp = document.querySelectorAll(className);

  temp.forEach((element) => {
    element.remove();
  });
}

export { updateWeekly, updateDaily };
