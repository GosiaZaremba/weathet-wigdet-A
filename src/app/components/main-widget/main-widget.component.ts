import { Component, inject } from '@angular/core';
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
  dataService: any = inject(CurrentWeatherService);
  latitude = '52.52';
  longitude = '13.41';

  constructor() {}

  ngOnInit() {
    this.dataService.fetchData(this.latitude, this.longitude);
  }
}
