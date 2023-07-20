import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePlayerDitailPageComponent } from './single-player-ditail-page.component';

describe('SinglePlayerDitailPageComponent', () => {
  let component: SinglePlayerDitailPageComponent;
  let fixture: ComponentFixture<SinglePlayerDitailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglePlayerDitailPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinglePlayerDitailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
