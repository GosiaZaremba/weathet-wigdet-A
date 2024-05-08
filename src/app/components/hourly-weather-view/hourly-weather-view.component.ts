import { Component, inject } from '@angular/core';
import { HourlyWeatherService } from '../../services/hourly-weather.service';
import { CommonModule } from '@angular/common';
import { HourViewService } from '../../services/hour-view.service';

import { HourViewComponent } from './hour-view/hour-view.component';

@Component({
  selector: 'app-hourly-weather-view',
  standalone: true,
  imports: [CommonModule, HourViewComponent],
  templateUrl: './hourly-weather-view.component.html',
  styleUrl: './hourly-weather-view.component.scss',
})
export class HourlyWeatherViewComponent {
  hourlyWeatherService = inject(HourlyWeatherService);
  hourViewService = inject(HourViewService);

  onReturn() {
    this.hourViewService.setHourlyView(false);
  }
}
