import {
  Component,
  EventEmitter,
  Input,
  Output,
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
  @Output() showDetailsEmitter: EventEmitter<boolean> = new EventEmitter();
  @Input() showDetails!: WritableSignal<boolean>;

  setShowDetails() {
    this.showDetails.set(!this.showDetails());
    this.showDetailsEmitter.emit(this.showDetails());
  }
}
