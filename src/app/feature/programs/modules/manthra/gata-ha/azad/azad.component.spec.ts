import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AzadComponent } from './azad.component';

describe('AzadComponent', () => {
  let component: AzadComponent;
  let fixture: ComponentFixture<AzadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AzadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AzadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
