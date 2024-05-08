import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HourlyWeatherViewComponent } from './hourly-weather-view.component';

describe('HourlyWeatherViewComponent', () => {
  let component: HourlyWeatherViewComponent;
  let fixture: ComponentFixture<HourlyWeatherViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HourlyWeatherViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HourlyWeatherViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
