import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdooHomePageComponent } from './ordoo-home-page.component';

describe('OrdooHomePageComponent', () => {
  let component: OrdooHomePageComponent;
  let fixture: ComponentFixture<OrdooHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdooHomePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdooHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
