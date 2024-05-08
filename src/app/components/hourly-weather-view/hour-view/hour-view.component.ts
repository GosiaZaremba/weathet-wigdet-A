import { Component, ElementRef, Input, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HourlyWeatherData } from '../../../models/hourly-weather.model';
import { HourlyWeatherService } from '../../../services/hourly-weather.service';
import { WeatherParamsIconsComponent } from '../../shared/weather-params-icons/weather-params-icons.component';
import { WeatherImgComponent } from '../../shared/weather-img/weather-img.component';

@Component({
  selector: 'app-hour-view',
  standalone: true,
  imports: [CommonModule, WeatherParamsIconsComponent, WeatherImgComponent],
  templateUrl: './hour-view.component.html',
  styleUrl: './hour-view.component.scss',
})
export class HourViewComponent {
  hourlyWeatherService = inject(HourlyWeatherService);
  @Input() hourData!: HourlyWeatherData[];
  @ViewChild('hoursContainer') hoursContainer!: ElementRef;

  onClickRight() {
    const element = this.hoursContainer.nativeElement as HTMLElement;
    let scrollLeft = this.hoursContainer.nativeElement.scrollLeft;
    element.scroll({
      left: scrollLeft + 300,
      behavior: 'smooth',
    });
  }
  onClickLeft() {
    const element = this.hoursContainer.nativeElement as HTMLElement;
    let scrollLeft = this.hoursContainer.nativeElement.scrollLeft;
    element.scroll({ left: scrollLeft - 300, behavior: 'smooth' });
  }
}
