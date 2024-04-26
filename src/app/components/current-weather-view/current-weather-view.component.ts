import { Component, inject } from '@angular/core';
import { CurrentWeatherService } from '../../services/current-weather.service';
import { CommonModule } from '@angular/common';
import { getWeatherIcon } from '../../helpers/weather-code';
import { QuoteComponent } from './quote/quote.component';
import { WeatherParamComponent } from './weather-param/weather-param.component';
import { WindDirectionParamComponent } from './wind-direction-param/wind-direction-param.component';

@Component({
  selector: 'app-current-weather-view',
  standalone: true,
  imports: [
    CommonModule,
    QuoteComponent,
    WeatherParamComponent,
    WindDirectionParamComponent,
  ],
  templateUrl: './current-weather-view.component.html',
  styleUrl: './current-weather-view.component.scss',
})
export class CurrentWeatherViewComponent {
  currentDataService = inject(CurrentWeatherService);

  icon!: string | null;
  getWeatherIcon = getWeatherIcon;

  latitude = '54.21';
  longitude = '18.38';
}
