import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-weather-img',
  standalone: true,
  imports: [],
  templateUrl: './weather-img.component.html',
  styleUrl: './weather-img.component.scss',
})
export class WeatherImgComponent {
  @Input() weatherIcon!: string | null;
}
