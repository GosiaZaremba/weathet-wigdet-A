import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DropdownComponent } from './dropdown/dropdown.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-settings-form',
  standalone: true,
  imports: [NgbModule, DropdownComponent, ReactiveFormsModule],
  templateUrl: './settings-form.component.html',
  styleUrl: './settings-form.component.scss',
})
export class SettingsFormComponent {
  tempUnits = [
    { name: 'Farenheit', value: 1 },
    { name: 'Celsius', value: 2 },
  ];
  windSpeedUnits = [
    { name: 'Knots', value: 1 },
    { name: 'Km/h', value: 2 },
    { name: 'M/s', value: 3 },
    { name: 'Mph', value: 4 },
  ];

  precipitationUnits = [
    { name: 'Milimeters', value: 1 },
    { name: 'Inch', value: 2 },
  ];

  settingsForm = new FormGroup({
    temperatureUnit: new FormControl(),
    windSpeedUnit: new FormControl(),
    precipitationUnit: new FormControl(),
    coordinates: new FormControl(),
  });

  onSubmit() {
    console.log(this.settingsForm.value);
  }
}
