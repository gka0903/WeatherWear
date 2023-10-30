import Home from './pages/Home'

import React, { useState } from 'react';
import { fetchWeather } from './WeatherService';

function App() {
  const [city, setCity] = useState('');          // 도시 이름을 저장하는 state
  const [weather, setWeather] = useState<any>(null); // 날씨 정보를 저장하는 state

  // 'Get Weather' 버튼을 클릭할 때 호출되는 함수
  const handleSearch = async () => {
    if (city) {                             // 도시 이름이 있을 경우에만 API 호출
      const data = await fetchWeather(city); // fetchWeather 함수를 호출해 날씨 정보를 가져옵니다.
      setWeather(data);                      // 가져온 날씨 정보를 state에 저장합니다.
    }
  };

  return (
    <div>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)} // 입력 필드의 값이 변경될 때 city state를 업데이트합니다.
      />
      <button onClick={handleSearch}>Get Weather</button>  

      {weather && (
        <div>
          <h2>{weather.name}</h2>               // 날씨 정보: 도시 이름
          <p>{weather.main.temp}°C</p>          // 날씨 정보: 온도
          <p>{weather.weather[0].description}</p> // 날씨 정보: 날씨 설명
        </div>
      )}
    </div>
  );

  //return <Home />;
}

export default App;