import { Component, inject } from '@angular/core';
import { DayWeatherViewComponent } from './day-weather-view/day-weather-view.component';
import { DailyWeatherService } from '../../services/daily-weather.service';

@Component({
  selector: 'app-daily-weather-view',
  standalone: true,
  imports: [DayWeatherViewComponent],
  templateUrl: './daily-weather-view.component.html',
  styleUrl: './daily-weather-view.component.scss',
  host: { class: 'd-flex' },
})
export class DailyWeatherViewComponent {
  dailyWeatherService = inject(DailyWeatherService);
}
