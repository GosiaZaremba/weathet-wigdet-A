import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherImgComponent } from './weather-img.component';

describe('WeatherImgComponent', () => {
  let component: WeatherImgComponent;
  let fixture: ComponentFixture<WeatherImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherImgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeatherImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
