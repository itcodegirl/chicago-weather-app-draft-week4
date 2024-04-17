//Function to display the date and time
//Designed to continuously update the day and time on a webpage every second.
function updateDateTime() {
  const now = new Date();
  const currentDateTime = now.toLocaleString();
  document.querySelector("#datetime").textContent = currentDateTime;
}
document.addEventListener("DOMContentLoaded", function () {
  setInterval(updateDateTime, 1000);
});

//Function to display city input
// Function to handle form submission
function searchButton(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#city-input");
  let h2 = document.querySelector("#city-display");
  let city = searchInput.value.trim();

  if (city) { // Assuming weatherData check is handled elsewhere or you fetch it regardless
    h2.innerHTML = `${city}`;
    // You can add more code here to display temperature, humidity, etc.
    let apiKey = "98f12063t8f0b4be43fb6oa12441998c";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(function (response) {
      const temperature = response.data.temperature;
      document.querySelector('#temperature').textContent = `${temperature}°`;
    }).catch(function (error) {
      console.error("Error fetching data: ", error);
      alert("Failed to fetch weather data.");
    });
  } else {
    alert("City not found or data unavailable");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  let form = document.querySelector("#search-form");
  form.addEventListener("submit", searchButton); // This line associates the submit event with searchButton
});


//Function to convert C&F temps
function convertToFahrenheit2(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = 6;
}
function convertToCelsius2(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = 19;
}
let fahrenheitLink2 = document.querySelector("#fahrenheit-link");
fahrenheitLink2.addEventListener("click", convertToFahrenheit2);

let celsiusLink2 = document.querySelector("#celsius-link");
celsiusLink2.addEventListener("click", convertToCelsius2);

//Function to display C&F temps
function converttoFahrenheit(event) {
  event.preventDefault();
  let displayFahrenheit = document.querySelector("#temp-value-F");

  displayFahrenheit.innerHTML = 63;
}

function converttoCelsius(event) {
  event.preventDefault();
  let displayCelsius = document.querySelector("#temp-value-C");
  displayCelsius.innerHTML = 17;
}

let fahrenheitLink = document.querySelector("#temp-value-F");
fahrenheitLink.addEventListener("click", converttoFahrenheit);

let celsiusLink = document.querySelector("#temp-value-C");
celsiusLink.addEventListener("click", converttoCelsius);
