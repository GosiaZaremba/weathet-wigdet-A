import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainWidgetComponent } from './components/main-widget/main-widget.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainWidgetComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'weather-widget';
}
