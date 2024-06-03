import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreRegisterHomePageComponent } from './pre-register-home-page.component';

describe('PreRegisterHomePageComponent', () => {
  let component: PreRegisterHomePageComponent;
  let fixture: ComponentFixture<PreRegisterHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreRegisterHomePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreRegisterHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
