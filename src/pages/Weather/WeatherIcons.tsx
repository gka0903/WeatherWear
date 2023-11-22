import React, { useState, useEffect } from 'react';
import { getWeatherForecast } from './WeatherService';
import { useDispatch } from 'react-redux';
import { setTemperature } from '../redux/slices/temperature';

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
  const dispatch = useDispatch();

  useEffect(() => {

    if (!latitude || !longitude) {
      console.error('Invalid latitude or longitude props');
      return;
    }

    const fetchForecasts = async () => {
      try {
        const forecastData = await getWeatherForecast(latitude, longitude);
        if (forecastData && forecastData.length > 0) {
          setForecasts(forecastData);
          // 현재 기온을 Redux store에 dispatch
          dispatch(setTemperature(forecastData[0].temp));
        }
      } catch (error) {
        console.error('Error fetching forecast data:', error);
      }
    };

    fetchForecasts();
  }, [latitude, longitude]);

    // 렌더링 로직
    if (forecasts.length === 0) {
      return <p>Loading weather data...</p>;
    }

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
          <p>{forecast.temp.toFixed(1)}°</p>
        </div>
      ))}
    </div>
  );
};

export default WeatherIcons;
