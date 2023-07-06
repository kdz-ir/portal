import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleRegisterPageComponent } from './double-register-page.component';

describe('DoubleRegisterPageComponent', () => {
  let component: DoubleRegisterPageComponent;
  let fixture: ComponentFixture<DoubleRegisterPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoubleRegisterPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoubleRegisterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
