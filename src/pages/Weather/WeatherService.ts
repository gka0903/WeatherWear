// WeatherService.ts

const API_KEY = process.env.REACT_APP_API_KEY;


console.log(`API Key: ${API_KEY}`); // API 키 출력하여 확인


interface WeatherData {
    temp: number; // 온도
    weather: string; // 날씨 상태
}

export async function getWeather(lat: number, lon: number): Promise<WeatherData | null> {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
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
