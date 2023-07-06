import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdooRegisterPageComponent } from './ordoo-register-page.component';

describe('OrdooRegisterPageComponent', () => {
  let component: OrdooRegisterPageComponent;
  let fixture: ComponentFixture<OrdooRegisterPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdooRegisterPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdooRegisterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
