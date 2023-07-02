import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleRegisterPageComponent } from './single-register-page.component';

describe('SingleRegisterPageComponent', () => {
  let component: SingleRegisterPageComponent;
  let fixture: ComponentFixture<SingleRegisterPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleRegisterPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleRegisterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
