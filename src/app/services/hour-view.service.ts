import { Injectable, computed, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HourViewService {
  private hourlyView = signal<boolean>(false);
  private dayIndex = signal<number>(1);

  setHourlyView(value: boolean) {
    this.hourlyView.set(value);
  }

  setDayIndex(value: number) {
    this.dayIndex.set(value);
  }

  hourlyViewData = computed(() => {
    return {
      hourlyView: this.hourlyView(),
      dayIndex: this.dayIndex(),
    };
  });
}
