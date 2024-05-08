export interface HourlyWeatherUnits {
  time: string;
  temperature_2m: string;
  apparent_temperature: string;
  precipitation_probability: string;
  precipitation: string;
  weather_code: string;
  wind_speed_10m: string;
  wind_direction_10m: string;
  is_day: string;
  uv_index: string;
}

export interface HourlyWeatherDataResponse {
  time: string[];
  temperature_2m: number[];
  apparent_temperature: number[];
  precipitation_probability: number[];
  precipitation: number[];
  weather_code: number[];
  wind_speed_10m: number[];
  wind_direction_10m: number[];
  is_day: number[];
  uv_index: number[];
}

export interface HourlyWeatherData {
  time: string;
  temperature_2m: number;
  apparent_temperature: number;
  precipitation_probability: number;
  precipitation: number;
  weather_code: number;
  wind_speed_10m: number;
  wind_direction_10m: number;
  is_day: number;
  uv_index: number;
}

export interface HourlyWeatherResponse {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  hourly_units: HourlyWeatherUnits;
  hourly: HourlyWeatherDataResponse;
}
