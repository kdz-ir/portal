import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallBackPageComponent } from './call-back-page.component';

describe('CallBackPageComponent', () => {
  let component: CallBackPageComponent;
  let fixture: ComponentFixture<CallBackPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallBackPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CallBackPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
