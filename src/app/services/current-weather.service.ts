import { Injectable, inject, signal } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Subscription, map } from 'rxjs';
import {
  CurrentDataResponse,
  CurrentUnits,
  CurrentWeatherData,
} from '../models/current-weather-data.model';
import { SettingsService } from './settings.service';

@Injectable({
  providedIn: 'root',
})
export class CurrentWeatherService {
  settingsService = inject(SettingsService);
  private currentData$ = new BehaviorSubject<unknown>(null);
  private currentData = signal<CurrentDataResponse | null>(null);
  private currentWeatherData = signal<CurrentWeatherData | null>(null);
  private currentWeatherUnits = signal<CurrentUnits | null>(null);

  private apiUrl = 'https://api.open-meteo.com/v1/forecast';

  constructor(private http: HttpClient) {}

  fetchData(): Subscription {
    let params = new HttpParams()
      .set('latitude', this.settingsService.getSettings().latitude)
      .set('longitude', this.settingsService.getSettings().longitude)
      .set(
        'current',
        [
          'temperature_2m',
          'relative_humidity_2m',
          'apparent_temperature',
          'is_day',
          'precipitation',
          'rain',
          'snowfall',
          'weather_code',
          'cloud_cover',
          'surface_pressure',
          'wind_speed_10m',
          'wind_direction_10m',
          'wind_gusts_10m',
        ].join(',')
      )
      .set('timezone', 'auto')
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
      .subscribe((data) => {
        this.currentData$.next(data);
      });
  }

  private processData(data: any): void {
    const { current, current_units } = data;
    this.currentData.set(data);
    this.currentWeatherData.set(current);
    this.currentWeatherUnits.set(current_units);
  }

  getCurrentWeatherData(): CurrentWeatherData | null {
    return this.currentWeatherData();
  }

  getCurrentWeatherUnits(): CurrentUnits | null {
    return this.currentWeatherUnits();
  }
}
