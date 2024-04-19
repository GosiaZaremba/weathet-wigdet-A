import { Injectable, signal } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Subscription, map } from 'rxjs';
import {
  DailyWeatherData,
  DailyWeatherDataResponse,
  DailyWeatherResponse,
  DailyWeatherUnits,
} from '../models/daily-weather-data.model';

@Injectable({
  providedIn: 'root',
})
export class DailyWeatherService {
  private dailyData$ = new BehaviorSubject<unknown>(null);
  private dailyData = signal<DailyWeatherResponse | null>(null);
  private dailyWeatherData = signal<DailyWeatherData[] | null>(null);
  private dailyWeatherUnits = signal<DailyWeatherUnits | null>(null);

  private apiUrl = 'https://api.open-meteo.com/v1/forecast';

  constructor(private http: HttpClient) {}

  fetchData(latitude: string, longitude: string, days: string): Subscription {
    let params = new HttpParams()
      .set('latitude', latitude)
      .set('longitude', longitude)
      .set(
        'daily',
        [
          'weather_code',
          'temperature_2m_max',
          'temperature_2m_min',
          'sunrise',
          'sunset',
          'uv_index_max',
          'precipitation_sum',
          'precipitation_probability_max',
          'wind_speed_10m_max',
          'wind_gusts_10m_max',
          'wind_direction_10m_dominant',
        ].join(',')
      )
      .set('timezone', 'auto')
      .set('forecast_days', days);
    return this.http
      .get<any>(this.apiUrl, { params: params })
      .pipe(map((response) => this.processData(response)))
      .subscribe((data) => {
        this.dailyData$.next(data);
      });
  }

  private processData(data: DailyWeatherResponse): void {
    const { daily, daily_units } = data;
    this.dailyData.set(data);
    this.dailyWeatherData.set(this.processDailyData(daily));
    this.dailyWeatherUnits.set(daily_units);
  }

  processDailyData(daily: DailyWeatherDataResponse): DailyWeatherData[] {
    const processedData: DailyWeatherData[] = [];
    daily.time.forEach((date: string, index: number) => {
      processedData.push({
        time: date,
        weather_code: daily.weather_code[index],
        temperature_2m_max: daily.temperature_2m_max[index],
        temperature_2m_min: daily.temperature_2m_min[index],
        sunrise: daily.sunrise[index],
        sunset: daily.sunset[index],
        uv_index_max: daily.uv_index_max[index],
        precipitation_sum: daily.precipitation_sum[index],
        precipitation_probability_max:
          daily.precipitation_probability_max[index],
        wind_speed_10m_max: daily.wind_speed_10m_max[index],
        wind_gusts_10m_max: daily.wind_gusts_10m_max[index],
        wind_direction_10m_dominant: daily.wind_direction_10m_dominant[index],
      });
    });
    return processedData;
  }

  getDailyWeatherData(): DailyWeatherData[] | null {
    return this.dailyWeatherData();
  }

  getDailyWeatherUnits(): DailyWeatherUnits | null {
    return this.dailyWeatherUnits();
  }
}
