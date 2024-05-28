import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SettingsViewService } from './services/settings-view.service';
import { MainWidgetComponent } from './components/main-widget/main-widget.component';
import { SettingsComponent } from './components/settings/settings.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainWidgetComponent, SettingsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  settingsViewService = inject(SettingsViewService);
  title = 'weather-widget';
}
