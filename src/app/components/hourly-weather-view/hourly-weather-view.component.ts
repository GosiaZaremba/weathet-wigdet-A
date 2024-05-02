import {
  Component,
  inject,
  ElementRef,
  ViewChild,
  effect,
  Input,
} from '@angular/core';
import { HourlyWeatherService } from '../../services/hourly-weather.service';
import { CommonModule } from '@angular/common';
import { WeatherParamsIconsComponent } from '../shared/weather-params-icons/weather-params-icons.component';
import { WeatherImgComponent } from '../shared/weather-img/weather-img.component';

@Component({
  selector: 'app-hourly-weather-view',
  standalone: true,
  imports: [CommonModule, WeatherParamsIconsComponent, WeatherImgComponent],
  templateUrl: './hourly-weather-view.component.html',
  styleUrl: './hourly-weather-view.component.scss',
})
export class HourlyWeatherViewComponent {
  hourlyWeatherService = inject(HourlyWeatherService);
  @Input() dayIndex!: number;
  @ViewChild('hoursContainer') hoursContainer!: ElementRef;

  constructor() {
    effect(() => {
      console.log(this.hourlyWeatherService.getHourlyWeatherData());
    });
  }

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
