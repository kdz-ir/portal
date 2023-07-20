import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdooHamyeshPollComponent } from './ordoo-hamyesh-poll.component';

describe('OrdooHamyeshPollComponent', () => {
  let component: OrdooHamyeshPollComponent;
  let fixture: ComponentFixture<OrdooHamyeshPollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdooHamyeshPollComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdooHamyeshPollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
