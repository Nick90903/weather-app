import { convert3Day, retrieveDate } from "./utilities";

function updateDisplay(data) {}

// Draws todays weather.
function updateDaily(data) {
  clearDom(".dayName");
  // Gets full date information
  let date = retrieveDate(data.current.dt, data.timezone_offset);

  //Starts dom manipulation
  const container = document.querySelector(".dayContainer");

  const dayName = document.createElement("p");
  dayName.classList.add("dayName");
  // Sets day Name to current day
  dayName.textContent = convert3Day(date);
  container.appendChild(dayName);
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
