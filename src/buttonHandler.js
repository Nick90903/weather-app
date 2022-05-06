import { fetchLocationData } from ".";

function searchButton() {
  document.querySelector("#search").addEventListener("click", function () {
    fetchLocationData();
  });
}

function unitsChanged() {
  const slider = document.querySelector("#slider");
  slider.addEventListener("click", function () {
    fetchLocationData();
  });
}

function addListeners() {
  searchButton();
  unitsChanged();
}

export { addListeners };
