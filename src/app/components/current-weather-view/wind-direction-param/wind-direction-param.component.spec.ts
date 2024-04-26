import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindDirectionParamComponent } from './wind-direction-param.component';

describe('WindDirectionParamComponent', () => {
  let component: WindDirectionParamComponent;
  let fixture: ComponentFixture<WindDirectionParamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WindDirectionParamComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WindDirectionParamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
