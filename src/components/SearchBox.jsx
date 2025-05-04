import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert"; // Import Alert for error messages

function SearchBox({ updateInfo }) {
  const [city, setCity] = useState("");
  const [error, setError] = useState(null); // State for error message

  const GEO_API_URL = "https://api.openweathermap.org/geo/1.0/direct";
  const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "29e6bf419e9c376e447a71e95c380a19";

  const getWeatherInfo = async () => {
    try {
      let georesponse = await fetch(
        `${GEO_API_URL}?q=${city},IN&limit=1&appid=${API_KEY}`
      );
      let jsonresponse = await georesponse.json();

      if (jsonresponse.length === 0) {
        throw new Error("City not found! Please enter a valid city name.");
      }

      let { lat, lon, name, state, country } = jsonresponse[0];

      let weatherResponse = await fetch(
        `${WEATHER_API_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
      );
      let weatherData = await weatherResponse.json();

      let result = {
        city: name, // Use the actual city name from API
        state: state || "Unknown", // Handle missing state info
        country: country || "Unknown",
        temp: weatherData.main.temp,
        tempmin: weatherData.main.temp_min,
        tempmax: weatherData.main.temp_max,
        humidity: weatherData.main.humidity,
        windspeed: weatherData.wind.speed,
        weathercondi: weatherData.weather[0].main,
      };

      console.log("🌤️ Weather Data:", result);
      return result;
    } catch (error) {
      console.error("Error fetching weather data:", error.message);
      setError(error.message); // Set error state
      return null; // Return null to avoid updating state with invalid data
    }
  };

  const handleChange = (e) => {
    setCity(e.target.value);
    setError(null); // Clear error when user types
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Reset error before fetching

    if (!city.trim()) {
      setError("City name cannot be empty!");
      return;
    }

    let newinfo = await getWeatherInfo();

    if (newinfo) {
      updateInfo(newinfo);
      setCity(""); // Clear input field on success
    }
  };

  return (
    <div className="text-center">
      <br />
      <form onSubmit={handleSubmit}>
        <TextField
          onChange={handleChange}
          id="city"
          label="City Name"
          variant="outlined"
          placeholder="Enter city name..."
          required
          value={city}
          error={!!error} // Show error in input field
          helperText={error} // Display error message below input
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
      </form>

      {error && (
        <Alert severity="error" sx={{ mt: 2 }}>
          {error}
        </Alert>
      )}
    </div>
  );
}

export default SearchBox;
