import { Injectable, signal } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CurrentWeatherService {
  private currentData$ = new BehaviorSubject<any>(null);
  // private currentWeatherData$ = new BehaviorSubject<any>(null);
  private currentWeatherData = signal<any>(null);
  private currentWeatherUnits$ = new BehaviorSubject<any>(null);
  latitude = '52.52';
  longitude = '13.41';

  private apiUrl = 'https://api.open-meteo.com/v1/forecast';

  constructor(private http: HttpClient) {
    this.fetchData(this.latitude, this.longitude);
  }

  private fetchData(latitude: string, longitude: string): any {
    let params = new HttpParams()
      .set('latitude', latitude)
      .set('longitude', longitude)
      .set(
        'current',
        [
          'temperature_2m',
          'relative_humidity_2m',
          'apparent_temperature',
          'is_day,precipitation',
          'rain',
          'snowfall',
          'weather_code',
          'cloud_cover',
          'surface_pressure',
          'wind_speed_10m',
          'wind_direction_10m',
          'wind_gusts_10m',
        ].join(',')
      );
    return this.http
      .get<any>(this.apiUrl, { params: params })
      .pipe(map((response) => this.processData(response)));
  }

  private processData(data: any): void {
    const { current, current_units } = data;
    this.currentData$.next(data);
    this.currentWeatherData.set(current);
    this.currentWeatherUnits$.next(current_units);
  }

  getCurrentWeatherData(): Observable<any> {
    console.log(this.currentWeatherData());

    return this.currentWeatherData();
  }

  getCurrentWeatherUnits(): Observable<any> {
    return this.currentWeatherUnits$.asObservable();
  }
}
