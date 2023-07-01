import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileCheckInputComponent } from './profile-check-input.component';

describe('ProfileCheckInputComponent', () => {
  let component: ProfileCheckInputComponent;
  let fixture: ComponentFixture<ProfileCheckInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileCheckInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileCheckInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
