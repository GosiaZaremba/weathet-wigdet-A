import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  DailyWeatherData,
  DailyWeatherUnits,
} from '../../../models/daily-weather-data.model';
import { WeatherParamsIconsComponent } from './weather-params-icons/weather-params-icons.component';
import { WeatherImgComponent } from '../../shared/weather-img/weather-img.component';
import { getWeatherIcon } from '../../../helpers/weather-code';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-day-weather-view',
  standalone: true,
  animations: [
    trigger('openClose', [
      state(
        'open',
        style({
          height: '300px',
        })
      ),
      state(
        'closed',
        style({
          height: '100px',
          overflow: 'hidden',
        })
      ),
      transition('open => closed', [animate('0.5s')]),
      transition('closed => open', [animate('0.5s')]),
    ]),
  ],
  imports: [WeatherParamsIconsComponent, CommonModule, WeatherImgComponent],
  templateUrl: './day-weather-view.component.html',
  styleUrl: './day-weather-view.component.scss',
})
export class DayWeatherViewComponent {
  @Input() dayData!: DailyWeatherData;
  @Input() dayUnits!: DailyWeatherUnits;
  @Input() showDetails!: boolean;
  getWeatherIcon = getWeatherIcon;
}
