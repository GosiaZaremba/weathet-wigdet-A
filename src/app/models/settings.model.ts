export type TemperatureUnit = 'fahrenheit' | 'celsius';
export type WindspeedUnit = 'mph' | 'ms' | 'kmh' | 'kn';
export type PrecipitationUnit = 'inch' | 'mm';
export type Latitude = string;
export type Longitude = string;

export interface Settings {
  temperature: TemperatureUnit;
  windSpeed: WindspeedUnit;
  precipitation: PrecipitationUnit;
  latitude: Latitude;
  longitude: Longitude;
}
