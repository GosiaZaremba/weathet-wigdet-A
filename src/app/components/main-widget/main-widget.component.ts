import { Component, inject } from '@angular/core';
import { CurrentWeatherService } from '../../services/current-weather.service';
import { DailyWeatherService } from '../../services/daily-weather.service';
import { HourlyWeatherService } from '../../services/hourly-weather.service';
import { CurrentWeatherViewComponent } from '../current-weather-view/current-weather-view.component';
import { RandomQuoteService } from '../../services/random-quote.service';

@Component({
  selector: 'app-main-widget',
  standalone: true,
  imports: [CurrentWeatherViewComponent],
  templateUrl: './main-widget.component.html',
  styleUrl: './main-widget.component.scss',
})
export class MainWidgetComponent {
  currentDataService = inject(CurrentWeatherService);
  dailyDataService = inject(DailyWeatherService);
  hourlyDataService = inject(HourlyWeatherService);
  randomQuoteService = inject(RandomQuoteService);

  latitude = '54.21';
  longitude = '18.38';
  days = '3';

  ngOnInit() {
    this.onInit();
  }

  onInit() {
    this.currentDataService.fetchData(this.latitude, this.longitude);
    this.dailyDataService.fetchData(this.latitude, this.longitude, this.days);
    this.hourlyDataService.fetchData(this.latitude, this.longitude, this.days);
    this.randomQuoteService.fetchData();
  }
}
