import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentWeatherService } from '../../services/current-weather.service';
import { DailyWeatherService } from '../../services/daily-weather.service';
import { HourlyWeatherService } from '../../services/hourly-weather.service';
import { CurrentWeatherViewComponent } from '../current-weather-view/current-weather-view.component';
import { RandomQuoteService } from '../../services/random-quote.service';
import { DailyWeatherViewComponent } from '../daily-weather-view/daily-weather-view.component';
import { HourlyWeatherViewComponent } from '../hourly-weather-view/hourly-weather-view.component';
import { HourViewService } from '../../services/hour-view.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-main-widget',
  standalone: true,
  imports: [
    CommonModule,
    CurrentWeatherViewComponent,
    DailyWeatherViewComponent,
    HourlyWeatherViewComponent,
  ],
  templateUrl: './main-widget.component.html',
  styleUrl: './main-widget.component.scss',
  animations: [
    trigger('transition', [
      state('start', style({ opacity: '0' })),
      state(
        'end',
        style({
          opacity: '1',
        })
      ),
      transition('start => end', [animate('1s ease-in-out')]),
    ]),
  ],
})
export class MainWidgetComponent {
  currentDataService = inject(CurrentWeatherService);
  dailyDataService = inject(DailyWeatherService);
  hourlyDataService = inject(HourlyWeatherService);
  randomQuoteService = inject(RandomQuoteService);
  hourViewService = inject(HourViewService);
  showDetails = signal<boolean>(false);

  // Gdansk, Poland
  latitude = '54.3523';
  longitude = '18.6491';
  days = '7';

  // Sydney, Australia
  // latitude = '-33.8678';
  // longitude = '151.2073';

  ngOnInit() {
    this.onInit();
  }

  onInit() {
    this.currentDataService.fetchData(this.latitude, this.longitude);
    this.dailyDataService.fetchData(this.latitude, this.longitude, this.days);
    this.hourlyDataService.fetchData(this.latitude, this.longitude, this.days);
    this.randomQuoteService.fetchData();
  }

  setShowDetails(showDetails: boolean) {
    this.showDetails.set(showDetails);
    console.log(this.showDetails());
  }
}
