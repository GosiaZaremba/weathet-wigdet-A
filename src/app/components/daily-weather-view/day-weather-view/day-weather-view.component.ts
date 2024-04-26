import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  DailyWeatherData,
  DailyWeatherUnits,
} from '../../../models/daily-weather-data.model';
import { WeatherParamsIconsComponent } from './weather-params-icons/weather-params-icons.component';

@Component({
  selector: 'app-day-weather-view',
  standalone: true,
  imports: [WeatherParamsIconsComponent, CommonModule],
  templateUrl: './day-weather-view.component.html',
  styleUrl: './day-weather-view.component.scss',
})
export class DayWeatherViewComponent {
  @Input() dayData!: DailyWeatherData;
  @Input() dayUnits!: DailyWeatherUnits;
}
