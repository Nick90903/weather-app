import { fetchLocationData } from ".";

function searchButton() {
  document.querySelector("#search").addEventListener("click", function () {
    fetchLocationData();
  });
}

export { searchButton };
