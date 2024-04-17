import { Component } from '@angular/core';
import { CurrentWeatherService } from '../../services/current-weather.service';

@Component({
  selector: 'app-main-widget',
  standalone: true,
  imports: [],
  templateUrl: './main-widget.component.html',
  styleUrl: './main-widget.component.scss',
})
export class MainWidgetComponent {
  data$: any;

  constructor(private currentWeatherService: CurrentWeatherService) {}

  ngOnInit(): void {
    this.data$ = this.currentWeatherService.getCurrentWeatherData();
    this.data$.subscribe((data: any) => {
      console.log(data);
    });
  }
}
