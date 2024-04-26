import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-weather-params-icons',
  standalone: true,
  imports: [],
  templateUrl: './weather-params-icons.component.html',
  styleUrl: './weather-params-icons.component.scss',
})
export class WeatherParamsIconsComponent {
  @Input() icon!: string;
  @Input() paramVal!: string | number | null;
  @Input() paramUnit!: string;
  @Input() additionalVal!: string | number | null;
  @Input() additionalUnit!: string;
}
