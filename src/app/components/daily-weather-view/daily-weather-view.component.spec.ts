import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyWeatherViewComponent } from './daily-weather-view.component';

describe('DailyWeatherViewComponent', () => {
  let component: DailyWeatherViewComponent;
  let fixture: ComponentFixture<DailyWeatherViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DailyWeatherViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DailyWeatherViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
