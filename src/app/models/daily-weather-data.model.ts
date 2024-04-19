export interface DailyWeatherUnits {
  time: string;
  weather_code: string;
  temperature_2m_max: string;
  temperature_2m_min: string;
  sunrise: string;
  sunset: string;
  uv_index_max: string;
  precipitation_sum: string;
  precipitation_probability_max: string;
  wind_speed_10m_max: string;
  wind_gusts_10m_max: string;
  wind_direction_10m_dominant: string;
}

export interface DailyWeatherDataResponse {
  time: string[];
  weather_code: number[];
  temperature_2m_max: number[];
  temperature_2m_min: number[];
  sunrise: string[];
  sunset: string[];
  uv_index_max: number[];
  precipitation_sum: number[];
  precipitation_probability_max: number[];
  wind_speed_10m_max: number[];
  wind_gusts_10m_max: number[];
  wind_direction_10m_dominant: number[];
}

export interface DailyWeatherData {
  time: string;
  weather_code: number;
  temperature_2m_max: number;
  temperature_2m_min: number;
  sunrise: string;
  sunset: string;
  uv_index_max: number;
  precipitation_sum: number;
  precipitation_probability_max: number;
  wind_speed_10m_max: number;
  wind_gusts_10m_max: number;
  wind_direction_10m_dominant: number;
}

export interface DailyWeatherResponse {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: 250;
  daily_units: DailyWeatherUnits;
  daily: DailyWeatherDataResponse;
}
