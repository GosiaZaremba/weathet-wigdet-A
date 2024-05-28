import { Injectable, signal, computed } from '@angular/core';
import {
  PrecipitationUnit,
  TemperatureUnit,
  WindspeedUnit,
  Latitude,
  Longitude,
  Settings,
} from '../models/settings.model';

// Gdansk, Poland
// latitude = '54.3523';
// longitude = '18.6491';

// Sydney, Australia
// latitude = '-33.8678';
// longitude = '151.2073';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  private temperatureUnit = signal<TemperatureUnit>('celsius');
  private windspeedUnit = signal<WindspeedUnit>('kmh');
  private precipitationUnit = signal<PrecipitationUnit>('mm');
  private longitude = signal<Longitude>('54.3523');
  private latitude = signal<Latitude>('18.6491');
  private days = signal<string>('7');

  setSettings(settings: Settings) {
    this.temperatureUnit.set(settings.temperature);
    this.windspeedUnit.set(settings.windSpeed);
    this.precipitationUnit.set(settings.precipitation);
    this.longitude.set(settings.longitude);
    this.latitude.set(settings.latitude);
  }

  getSettings = computed(() => {
    return {
      temperatureUnit: this.temperatureUnit(),
      windspeedUnit: this.windspeedUnit(),
      precipitationUnit: this.precipitationUnit(),
      longitude: this.longitude(),
      latitude: this.latitude(),
      days: this.days(),
    };
  });
}
