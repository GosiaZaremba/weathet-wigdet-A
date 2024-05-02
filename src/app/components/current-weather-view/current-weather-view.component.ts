import { Component, inject } from '@angular/core';
import { CurrentWeatherService } from '../../services/current-weather.service';
import { CommonModule } from '@angular/common';
import { QuoteComponent } from './quote/quote.component';
import { WeatherParamComponent } from './weather-param/weather-param.component';
import { WindDirectionParamComponent } from './wind-direction-param/wind-direction-param.component';
import { WeatherImgComponent } from '../shared/weather-img/weather-img.component';

@Component({
  selector: 'app-current-weather-view',
  standalone: true,
  imports: [
    CommonModule,
    QuoteComponent,
    WeatherParamComponent,
    WindDirectionParamComponent,
    WeatherImgComponent,
  ],
  templateUrl: './current-weather-view.component.html',
  styleUrl: './current-weather-view.component.scss',
})
export class CurrentWeatherViewComponent {
  currentDataService = inject(CurrentWeatherService);

  latitude = '54.21';
  longitude = '18.38';
}
