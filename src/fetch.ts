import axios from 'axios';
import { WeatherData } from './type';

const BASE_URL = 'https://api.openweathermap.org/data/2.5';
const LAT = 37.65590833; // 지역의 위도를 넣어주세요!
const LON = 126.7770556; // 지역의 경도를 넣어주세요!

// const client = axios.create({
//   baseURL: BASE_URL,
// });

export const weatherApi = {
  getWeatherByCity: async (): Promise<WeatherData> => {
    try {
      //const response = await client.get<WeatherData>(
      const response = await axios.get<WeatherData>(
        `${BASE_URL}/weather?lat=${LAT}&lon=${LON}&appid=${process.env.REACT_APP_API_KEY}`
      );
      return response.data;
    } catch (error) {
      console.error('Error fetching weather data:', error);
      throw error; // 에러를 호출한 함수로 전달
    }
  },
};
