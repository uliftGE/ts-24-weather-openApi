import { useQuery } from '@tanstack/react-query';
import { weatherApi } from './fetch.ts';
import { WeatherData } from './type.ts';
import React from 'react';
const WeatherDisplay = () => {
  const {
    data: weatherData,
    isLoading,
    error,
  } = useQuery<WeatherData>({
    queryKey: ['weather', 'Goyang-si'],
    queryFn: () => weatherApi.getWeatherByCity(),
  });

  const convertKelvinToCelsius = (kelvin: number): number => {
    return Math.round((kelvin - 273.15) * 10) / 10;
  };

  if (isLoading) return <div>날씨 정보를 불러오는 중...</div>;
  if (error) return <div>오류가 발생했습니다.</div>;
  if (!weatherData) return null;

  return (
    <div className='p-6 max-w-md mx-auto bg-white rounded-xl shadow-md flex justify-center items-center'>
      <h1 className='text-2xl font-bold mb-4'>{weatherData.name}</h1>

      <div className='space-y-4'>
        <div className='flex items-center'>
          <img
            src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
            alt={weatherData.weather[0].description}
            className='w-16 h-16'
          />
          <div className='ml-4'>
            <p className='text-xl'>
              {convertKelvinToCelsius(weatherData.main.temp)}°C
            </p>
            <p className='text-gray-600'>
              {weatherData.weather[0].description}
            </p>
          </div>
        </div>

        <div className='grid grid-cols-2 gap-4'>
          <div>
            <p className='text-gray-600'>체감 온도</p>
            <p>{convertKelvinToCelsius(weatherData.main.feels_like)}°C</p>
          </div>
          <div>
            <p className='text-gray-600'>습도</p>
            <p>{weatherData.main.humidity}%</p>
          </div>
          <div>
            <p className='text-gray-600'>풍속</p>
            <p>{weatherData.wind.speed} m/s</p>
          </div>
          <div>
            <p className='text-gray-600'>기압</p>
            <p>{weatherData.main.pressure} hPa</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDisplay;
