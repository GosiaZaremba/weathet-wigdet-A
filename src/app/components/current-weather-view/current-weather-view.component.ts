import { Component, OnInit, effect, inject } from '@angular/core';
import { CurrentWeatherService } from '../../services/current-weather.service';
import { CommonModule } from '@angular/common';
import { getWeatherIcon } from '../../helpers/weather-code';

@Component({
  selector: 'app-current-weather-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './current-weather-view.component.html',
  styleUrl: './current-weather-view.component.scss',
})
export class CurrentWeatherViewComponent implements OnInit {
  currentDataService = inject(CurrentWeatherService);
  icon!: string | null;
  getWeatherIcon = getWeatherIcon;

  latitude = '54.21';
  longitude = '18.38';

  constructor() {
    // effect(() => {
    //   this.icon = getWeatherIcon(
    //     this.currentDataService.getCurrentWeatherData()?.weather_code!,
    //     this.currentDataService.getCurrentWeatherData()?.is_day!
    //   );
    // });
  }

  ngOnInit(): void {}
}
