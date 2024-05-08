import { Component, Input, inject } from '@angular/core';
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
} from '@angular/animations';
import { HourViewService } from '../../../services/hour-view.service';

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
  hourViewService = inject(HourViewService);
  @Input() dayData!: DailyWeatherData;
  @Input() dayUnits!: DailyWeatherUnits;
  @Input() showDetails!: boolean;
  @Input() index!: number;

  onClickWeatherIcon(index: number) {
    this.hourViewService.setDayIndex(index);
    this.hourViewService.setHourlyView(true);

    console.log(this.hourViewService.hourlyViewData());
  }
}
