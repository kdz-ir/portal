import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportInSurenceCheckButtonComponent } from './sport-in-surence-check-button.component';

describe('SportInSurenceCheckButtonComponent', () => {
  let component: SportInSurenceCheckButtonComponent;
  let fixture: ComponentFixture<SportInSurenceCheckButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SportInSurenceCheckButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SportInSurenceCheckButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
