// WeatherService.ts
import KEY from "../../keys/env";

const API_KEY = KEY;


console.log(`API Key: ${API_KEY}`); // API 키 출력하여 확인


interface WeatherData {
    temp: number; // 온도
    weather: string; // 날씨 상태
}

export async function getWeather(lat: number, lon: number): Promise<WeatherData | null> {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
        //xml로 받고싶으면 metric뒤에 &mode=xml 추가작성, 근데 xml로하려면 밑에도 수정필요, 밑에는 JSON임
        if (!response.ok) {
            throw new Error('Weather data fetch failed');
        }
        const data = await response.json();
        console.log(data);
        return {
            temp: data.main.temp,
            weather: data.weather[0].main,
        };
    } catch (error) {
        console.error('Error fetching weather data:', error);
        return null;
    }
}
