import { Injectable, signal } from '@angular/core';
import { BehaviorSubject, Subscription, map } from 'rxjs';
import {
  HourlyWeatherData,
  HourlyWeatherDataResponse,
  HourlyWeatherResponse,
  HourlyWeatherUnits,
} from '../models/hourly-weather.model';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HourlyWeatherService {
  private hourlyData$ = new BehaviorSubject<unknown>(null);
  private hourlyData = signal<HourlyWeatherResponse | null>(null);
  private hourlyWeatherData = signal<HourlyWeatherData[] | null>(null);
  private hourlyWeatherUnits = signal<HourlyWeatherUnits | null>(null);

  private apiUrl = 'https://api.open-meteo.com/v1/forecast';

  constructor(private http: HttpClient) {}

  fetchData(latitude: string, longitude: string, days: string): Subscription {
    let params = new HttpParams()
      .set('latitude', latitude)
      .set('longitude', longitude)
      .set(
        'hourly',
        [
          'temperature_2m',
          'apparent_temperature',
          'precipitation_probability',
          'precipitation',
          'weather_code',
          'wind_speed_10m',
          'wind_direction_10m',
        ].join(',')
      )
      .set('timezone', 'auto')
      .set('forecast_days', days);
    return this.http
      .get<any>(this.apiUrl, { params: params })
      .pipe(map((response) => this.processData(response)))
      .subscribe((data) => {
        this.hourlyData$.next(data);
      });
  }

  private processData(data: HourlyWeatherResponse): void {
    const { hourly, hourly_units } = data;
    this.hourlyWeatherUnits.set(hourly_units);
    this.hourlyData.set(data);
    this.hourlyWeatherData.set(this.processHourlyData(hourly));
  }

  private processHourlyData(
    hourly: HourlyWeatherDataResponse
  ): HourlyWeatherData[] {
    const processedData: HourlyWeatherData[] = [];
    hourly.time.forEach((date: string, index: number) => {
      processedData.push({
        time: date,
        temperature_2m: hourly.temperature_2m[index],
        apparent_temperature: hourly.apparent_temperature[index],
        precipitation_probability: hourly.precipitation_probability[index],
        precipitation: hourly.precipitation[index],
        weather_code: hourly.weather_code[index],
        wind_speed_10m: hourly.wind_speed_10m[index],
        wind_direction_10m: hourly.wind_direction_10m[index],
      });
    });
    return processedData;
  }
  getHourlyWeatherData(): HourlyWeatherData[] | null {
    return this.hourlyWeatherData();
  }

  getHourlyWeatherUnits(): HourlyWeatherUnits | null {
    return this.hourlyWeatherUnits();
  }
}
