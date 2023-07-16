import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPlayerPageComponent } from './all-player-page.component';

describe('AllPlayerPageComponent', () => {
  let component: AllPlayerPageComponent;
  let fixture: ComponentFixture<AllPlayerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllPlayerPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllPlayerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
