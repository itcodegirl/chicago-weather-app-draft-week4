// Function to display the date and time
function updateDateTime() {
  const now = new Date();
  document.querySelector("#datetime").textContent = now.toLocaleString();
}

document.addEventListener("DOMContentLoaded", function () {
  setInterval(updateDateTime, 1000);
});


// Function to fetch and display weather data from OpenWeatherMap
function fetchWeatherData(city) {
  const apiKey = "d9126eda46b6755db8578eaa14ec0ba3"; // Replace with your actual OpenWeatherMap API key
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`; // Metric units for Celsius

  axios.get(apiUrl).then(response => {
    const temperature = response.data.main.temp; // Accessing the temperature from the response
    document.querySelector('#temperature').textContent = `${temperature}°C`; // Updating the temperature display
  }).catch(error => {
    console.error("Error fetching data: ", error);
    alert("Failed to fetch weather data. Please check city name and network connection.");
  });
}

// Function to handle form submission
function searchButton(event) {
  event.preventDefault();
  const searchInput = document.querySelector("#city-input").value.trim();

  if (searchInput) {
    document.querySelector("#city-display").textContent = searchInput;
    fetchWeatherData(searchInput);
  } else {
    alert("Please enter a city name.");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("#search-form").addEventListener("submit", searchButton);
});

// Function to convert temperatures
function convertTemperature(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  const isFahrenheit = event.target.id === "fahrenheit-link";
  const currentTemperature = parseInt(temperatureElement.textContent);

  if (isFahrenheit) {
    const fahrenheit = Math.round(currentTemperature * (9 / 5) + 32);
    temperatureElement.textContent = `${fahrenheit}°F`;
  } else {
    const celsius = Math.round((currentTemperature - 32) * (5 / 9));
    temperatureElement.textContent = `${celsius}°C`;
  }
}

document.querySelector("#fahrenheit-link").addEventListener("click", convertTemperature);
document.querySelector("#celsius-link").addEventListener("click", convertTemperature);
