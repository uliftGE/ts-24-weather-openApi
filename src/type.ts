export type Coordinates = {
  lon: number;
  lat: number;
};
export type WeatherCondition = {
  id: number;
  main: string;
  description: string;
  icon: string;
};
export type MainWeatherData = {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
};

export type Wind = {
  speed: number;
  deg: number;
  gust: number;
};

export type Clouds = {
  all: number;
};

export type SystemInfo = {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
};
export type WeatherData = {
  coord: Coordinates;
  weather: WeatherCondition[];
  base: string;
  main: MainWeatherData;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  sys: SystemInfo;
  timezone: number;
  id: number;
  name: string;
  cod: number;
};
