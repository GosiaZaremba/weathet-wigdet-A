import { Component, effect, inject } from '@angular/core';
import { CurrentWeatherService } from '../../services/current-weather.service';
import { DailyWeatherService } from '../../services/daily-weather.service';

@Component({
  selector: 'app-main-widget',
  standalone: true,
  imports: [],
  templateUrl: './main-widget.component.html',
  styleUrl: './main-widget.component.scss',
})
export class MainWidgetComponent {
  currentDataService: any = inject(CurrentWeatherService);
  dailyDataService: any = inject(DailyWeatherService);

  latitude = '54.21';
  longitude = '18.38';
  days = 3;

  constructor() {
    effect(() => console.log(this.dailyDataService.getDailyWeatherData()));
  }

  ngOnInit() {
    this.currentDataService.fetchData(this.latitude, this.longitude);
    this.dailyDataService.fetchData(this.latitude, this.longitude, this.days);
  }
}
