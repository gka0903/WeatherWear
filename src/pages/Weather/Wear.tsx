// Wear.tsx

import React, { useState, useEffect } from 'react';
import { getWeather } from './WeatherService';

const Wear = () => {
    const [latitude, setLatitude] = useState<number>(37.5665); // 기본값은 서울의 위도
    const [longitude, setLongitude] = useState<number>(126.9780); // 기본값은 서울의 경도
    const [recommendation, setRecommendation] = useState<string>('추천 복장을 불러오는 중...');

    useEffect(() => {
    const fetchWeather = async () => {
        const weatherData = await getWeather(latitude, longitude);
        if (weatherData) {
        const { temp } = weatherData;

        let recommendation = '자켓을 입으세요.';
        if (temp > 25) {
            recommendation = '반팔을 입으세요.';
        } else if (temp < 10) {
            recommendation = '코트를 입으세요.';
        }

        // 여기에 더 많은 복장 조건을 추가할 수 있습니다.

        setRecommendation(recommendation);
        } else {
        setRecommendation('날씨 정보를 불러오는 데 실패했습니다.');
        }
    };

    fetchWeather();
  }, [latitude, longitude]); // 위도와 경도가 변경될 때마다 날씨 정보를 다시 가져옵니다.

    return (
    <div>
        <h1>복장 추천</h1>
        <label>
        위도:
        <input type="number" value={latitude} onChange={e => setLatitude(Number(e.target.value))} />
        </label>
        <label>
        경도:
        <input type="number" value={longitude} onChange={e => setLongitude(Number(e.target.value))} />
        </label>
        <p>{recommendation}</p>
    </div>
    );
};

export default Wear;
