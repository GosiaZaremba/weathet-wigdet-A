import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayWeatherViewComponent } from './day-weather-view.component';

describe('DayWeatherViewComponent', () => {
  let component: DayWeatherViewComponent;
  let fixture: ComponentFixture<DayWeatherViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DayWeatherViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DayWeatherViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
