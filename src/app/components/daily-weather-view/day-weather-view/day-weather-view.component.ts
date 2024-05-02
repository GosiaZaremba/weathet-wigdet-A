import { Component, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  DailyWeatherData,
  DailyWeatherUnits,
} from '../../../models/daily-weather-data.model';
import { WeatherParamsIconsComponent } from '../../shared/weather-params-icons/weather-params-icons.component';
import { WeatherImgComponent } from '../../shared/weather-img/weather-img.component';
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
  @Input() index!: number;
  dayIndex = signal<number>(0);

  //TODO send signal to daily-weather-view, then to main-widget, then to hourly.
  // Also, to keep the structure it would be a good idea to do a separate component for hours and then iterate over them.
  // Maybe create a service for dayIndex and view?

  onClickWeatherIcon(index: number) {
    this.dayIndex.set(index);
    console.log(this.dayIndex());
  }
}
