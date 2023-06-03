import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleHomePageComponent } from './single-home-page.component';

describe('SingleHomePageComponent', () => {
  let component: SingleHomePageComponent;
  let fixture: ComponentFixture<SingleHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleHomePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
