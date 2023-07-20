import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JamHomePageComponent } from './jam-home-page.component';

describe('JamHomePageComponent', () => {
  let component: JamHomePageComponent;
  let fixture: ComponentFixture<JamHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JamHomePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JamHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
