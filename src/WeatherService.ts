import axios from 'axios';

const API_KEY = 'process.env.REACT_APP_API_KEY'; // OpenWeatherMap API 키를 상수로 선언

// 도시 이름을 인자로 받아 날씨 정보를 가져오는 함수를 정의
export const fetchWeather = async (city: string) => {
    try {
    // axios.get을 사용하여 HTTP GET 요청을 보냄
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
        params: {
        q: city,           // 도시 이름
        appid: API_KEY,    // API 키
        units: 'metric'    // 온도 단위 (섭씨)
        }
    }); //오픈웨더홈페이지에 요청

    return response.data; // 응답 데이터를 반환
    } catch (error) {
    console.error(error); // 오류가 발생하면 콘솔에 로그를 출력
    // 추가적인 로직 구현
    }
};
