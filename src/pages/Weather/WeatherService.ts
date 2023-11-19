import KEY from "../../keys/env";

const API_KEY = KEY;

interface WeatherForecast {
    time: string;
    temp: number;
    icon: string;
}

export async function getWeatherForecast(lat: number, lon: number): Promise<WeatherForecast[] | null> {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
        if (!response.ok) {
            throw new Error('Weather forecast fetch failed');
        }
        const data = await response.json();

        const currentTime = new Date();
        const endTime = new Date(currentTime.getTime() + 24 * 60 * 60 * 1000);

        const forecasts = data.list.filter((item: any) => {
            const forecastTime = new Date(item.dt_txt);
            return forecastTime >= currentTime && forecastTime <= endTime;
        }).map((item: any) => ({
            time: item.dt_txt,
            temp: item.main.temp,
            icon: item.weather[0].icon,
        }));

        return forecasts;
    } catch (error) {
        console.error('Error fetching weather forecast data:', error);
        return null;
    }
}
