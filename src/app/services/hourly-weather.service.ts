import { Injectable, signal, inject } from '@angular/core';
import { BehaviorSubject, Subscription, map } from 'rxjs';
import {
  HourlyWeatherData,
  HourlyWeatherDataResponse,
  HourlyWeatherResponse,
  HourlyWeatherUnits,
} from '../models/hourly-weather.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SettingsService } from './settings.service';

@Injectable({
  providedIn: 'root',
})
export class HourlyWeatherService {
  settingsService = inject(SettingsService);

  private hourlyData$ = new BehaviorSubject<unknown>(null);
  private hourlyData = signal<HourlyWeatherResponse | null>(null);
  private hourlyWeatherData = signal<HourlyWeatherData[][] | null>(null);
  private hourlyWeatherUnits = signal<HourlyWeatherUnits | null>(null);

  private apiUrl = 'https://api.open-meteo.com/v1/forecast';

  constructor(private http: HttpClient) {}

  fetchData(): Subscription {
    let params = new HttpParams()
      .set('latitude', this.settingsService.getSettings().latitude)
      .set('longitude', this.settingsService.getSettings().longitude)
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
          'uv_index',
          'is_day',
        ].join(',')
      )
      .set('timezone', 'auto')
      .set('forecast_days', this.settingsService.getSettings().days)
      .set(
        'temperature_unit',
        this.settingsService.getSettings().temperatureUnit
      )
      .set('wind_speed_unit', this.settingsService.getSettings().windspeedUnit)
      .set(
        'precipitation_unit',
        this.settingsService.getSettings().precipitationUnit
      );
    return this.http
      .get<any>(this.apiUrl, { params: params })
      .pipe(map((response) => this.processData(response)))
      .subscribe(
        (data) => {
          this.hourlyData$.next(data);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  private processData(data: HourlyWeatherResponse): void {
    const { hourly, hourly_units } = data;
    this.hourlyWeatherUnits.set(hourly_units);
    this.hourlyData.set(data);
    this.hourlyWeatherData.set(this.processHourlyData(hourly));
  }

  private processHourlyData(
    hourly: HourlyWeatherDataResponse
  ): HourlyWeatherData[][] {
    const sortedData: { [date: string]: HourlyWeatherData[] } = {};
    hourly.time.forEach((date: string, index: number) => {
      const day = date.split('T')[0];
      if (!sortedData[day]) {
        sortedData[day] = [];
      }
      sortedData[day].push({
        time: date,
        temperature_2m: hourly.temperature_2m[index],
        apparent_temperature: hourly.apparent_temperature[index],
        precipitation_probability: hourly.precipitation_probability[index],
        precipitation: hourly.precipitation[index],
        weather_code: hourly.weather_code[index],
        wind_speed_10m: hourly.wind_speed_10m[index],
        wind_direction_10m: hourly.wind_direction_10m[index],
        uv_index: hourly.uv_index[index],
        is_day: hourly.is_day[index],
      });
    });
    return Object.values(sortedData);
  }

  getHourlyWeatherData(): HourlyWeatherData[][] | null {
    return this.hourlyWeatherData();
  }

  getHourlyWeatherUnits(): HourlyWeatherUnits | null {
    return this.hourlyWeatherUnits();
  }
}
