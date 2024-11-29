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
    <div className='flex justify-center items-center bg-gradient-to-br from-blue-100 via-blue-300 to-blue-500 min-h-screen py-10 p-16'>
      <div className='p-6 max-w-md bg-white rounded-2xl shadow-lg flex flex-col items-center justify-center'>
        <h1 className='text-3xl font-bold mb-6 text-gray-800'>
          {weatherData.name}
        </h1>

        <div className='space-y-6 w-full'>
          {/* 현재 날씨 아이콘 및 정보 */}
          <div className='flex items-center'>
            <img
              src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
              alt={weatherData.weather[0].description}
              className='w-20 h-20'
            />
            <div className='ml-6'>
              <p className='text-2xl font-semibold text-gray-700'>
                {convertKelvinToCelsius(weatherData.main.temp)}°C
              </p>
              <p className='text-gray-600 capitalize'>
                {weatherData.weather[0].description}
              </p>
            </div>
          </div>

          {/* 세부 날씨 정보 */}
          <div className='grid grid-cols-2 gap-6 text-center'>
            <div className='bg-blue-50 rounded-xl p-4 shadow-md'>
              <p className='text-sm text-gray-600'>체감 온도</p>
              <p className='text-lg font-bold text-gray-800'>
                {convertKelvinToCelsius(weatherData.main.feels_like)}°C
              </p>
            </div>
            <div className='bg-blue-50 rounded-xl p-4 shadow-md'>
              <p className='text-sm text-gray-600'>습도</p>
              <p className='text-lg font-bold text-gray-800'>
                {weatherData.main.humidity}%
              </p>
            </div>
            <div className='bg-blue-50 rounded-xl p-4 shadow-md'>
              <p className='text-sm text-gray-600'>풍속</p>
              <p className='text-lg font-bold text-gray-800'>
                {weatherData.wind.speed} m/s
              </p>
            </div>
            <div className='bg-blue-50 rounded-xl p-4 shadow-md'>
              <p className='text-sm text-gray-600'>기압</p>
              <p className='text-lg font-bold text-gray-800'>
                {weatherData.main.pressure} hPa
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDisplay;
