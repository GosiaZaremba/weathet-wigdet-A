import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherParamComponent } from './weather-param.component';

describe('WeatherParamComponent', () => {
  let component: WeatherParamComponent;
  let fixture: ComponentFixture<WeatherParamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherParamComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeatherParamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
