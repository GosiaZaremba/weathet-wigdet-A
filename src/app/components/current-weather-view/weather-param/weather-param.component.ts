import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-weather-param',
  standalone: true,
  imports: [],
  templateUrl: './weather-param.component.html',
  styleUrl: './weather-param.component.scss',
})
export class WeatherParamComponent {
  @Input() paramName!: string;
  @Input() paramVal!: string | number | null;
  @Input() paramValMax!: string | number;
  @Input() paramUnit!: string;
}
