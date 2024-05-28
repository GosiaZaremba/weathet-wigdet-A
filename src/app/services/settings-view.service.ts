import { Injectable, computed, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SettingsViewService {
  private settingsView = signal<boolean>(true);

  setSettingsView(value: boolean) {
    this.settingsView.set(value);
  }

  getSettingsView = computed(() => this.settingsView());
}
