import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherParamsIconsComponent } from './weather-params-icons.component';

describe('WeatherParamsIconsComponent', () => {
  let component: WeatherParamsIconsComponent;
  let fixture: ComponentFixture<WeatherParamsIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherParamsIconsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeatherParamsIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
