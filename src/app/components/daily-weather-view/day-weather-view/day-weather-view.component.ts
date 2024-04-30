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
  sequence,
} from '@angular/animations';

@Component({
  selector: 'app-day-weather-view',
  standalone: true,
  imports: [WeatherParamsIconsComponent, CommonModule, WeatherImgComponent],
  templateUrl: './day-weather-view.component.html',
  styleUrl: './day-weather-view.component.scss',
  animations: [
    trigger('openClose', [
      state('open', style({ height: '*' })),
      state(
        'closed',
        style({
          height: '100px',
        })
      ),
      transition('open => closed', [animate('0.5s ease-in-out')]),
      transition('closed => open', [animate('0.5s ease-in-out')]),
    ]),
  ],
})
export class DayWeatherViewComponent {
  @Input() dayData!: DailyWeatherData;
  @Input() dayUnits!: DailyWeatherUnits;
  @Input() showDetails!: boolean;
  getWeatherIcon = getWeatherIcon;
}
