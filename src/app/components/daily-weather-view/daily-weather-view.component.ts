import {
  Component,
  Input,
  WritableSignal,
  inject,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DayWeatherViewComponent } from './day-weather-view/day-weather-view.component';
import { DailyWeatherService } from '../../services/daily-weather.service';

@Component({
  selector: 'app-daily-weather-view',
  standalone: true,

  imports: [DayWeatherViewComponent, CommonModule],
  templateUrl: './daily-weather-view.component.html',
  styleUrl: './daily-weather-view.component.scss',
})
export class DailyWeatherViewComponent {
  dailyWeatherService = inject(DailyWeatherService);
  @Input() hourlyView!: WritableSignal<boolean>;
  showDetails = signal<boolean>(false);

  setShowDetails() {
    this.showDetails.set(!this.showDetails());
  }
}
