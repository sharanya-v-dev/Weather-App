import React from "react";
import "./WeatherCard.css";

function WeatherCard({ weather }) {
  return (
    <div className="card">
      <h2>
        {weather.name}, {weather.country}
      </h2>
      <p>Temperature: {weather.temperature}°C</p>
      <p>Wind Speed: {weather.windspeed} km/h</p>
      <p>Weather Code: {weather.weathercode}</p>
    </div>
  );
}

export default WeatherCard;
