import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-wind-direction-param',
  standalone: true,
  imports: [],
  templateUrl: './wind-direction-param.component.html',
  styleUrl: './wind-direction-param.component.scss',
})
export class WindDirectionParamComponent {
  @Input() paramName!: string;
  @Input() paramVal!: string | number;
}
