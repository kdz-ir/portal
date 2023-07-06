import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterHomePageComponent } from './register-home-page.component';

describe('RegisterHomePageComponent', () => {
  let component: RegisterHomePageComponent;
  let fixture: ComponentFixture<RegisterHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterHomePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
