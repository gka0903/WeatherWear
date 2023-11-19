import React, { useState, useEffect } from 'react';
import { getWeatherForecast } from './WeatherService';
import './Style.css';

interface WeatherIconsProps {
  latitude: number;
  longitude: number;
}

interface WeatherForecast {
  time: string;
  temp: number;
  icon: string;
}

const WeatherIcons: React.FC<WeatherIconsProps> = ({ latitude, longitude }) => {
  const [forecasts, setForecasts] = useState<WeatherForecast[]>([]);

  useEffect(() => {
    const fetchForecasts = async () => {
      const forecastData = await getWeatherForecast(latitude, longitude);
      if (forecastData) {
        setForecasts(forecastData);
      }
    };

    fetchForecasts();
  }, [latitude, longitude]);

  const formatTime = (time: string) => {
    const date = new Date(time);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12; 
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    return `${ampm} ${formattedHours}:${formattedMinutes}`;
  };

  return (
    <div className="weather-icons-container">
      {forecasts.map((forecast, index) => (
        <div key={index} className="weather-icon-item">
          <p>{formatTime(forecast.time)}</p>
          <img src={`http://openweathermap.org/img/wn/${forecast.icon}.png`} alt="weather icon" />
          <p>{forecast.temp}°C</p>
        </div>
      ))}
    </div>
  );
};

export default WeatherIcons;
