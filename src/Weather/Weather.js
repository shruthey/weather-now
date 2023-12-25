import React from "react";
import "./Weather.css"; // Import your CSS file for styling

const Weather = ({ data }) => {
  const {
    location,
    forecast: { forecastday },
  } = data;

  const todayForecast = forecastday[0];

  return (
    <div className="weather-container">
      <div className="location-info">
        <h2>
          {location.name}, {location.region}, {location.country}
        </h2>
        <p>Date: {todayForecast.date}</p>
      </div>

      <div className="current-weather">
        <h3>Current Weather</h3>
        <div className="condition-info">
          <p>
            Temperature: {todayForecast.day.avgtemp_c}°C /{" "}
            {todayForecast.day.avgtemp_f}°F
          </p>
          <p>Condition: {todayForecast.day.condition.text}</p>
          <p>
            Max Wind Speed: {todayForecast.day.maxwind_kph} kph /{" "}
            {todayForecast.day.maxwind_mph} mph
          </p>
        </div>
      </div>

      <div className="hourly-forecast">
        <h3>Hourly Forecast</h3>
        <div className="hourly-items">
          {todayForecast.hour.map((hourData) => (
            <div key={hourData.time_epoch} className="hourly-item">
              <p className="hour">{hourData.time.split(" ")[1]}</p>
              <p className="temp">
                {hourData.temp_c}°C / {hourData.temp_f}°F
              </p>
              <img
                src={hourData.condition.icon}
                alt={hourData.condition.text}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Weather;
