import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdooAyinNamePageComponent } from './ordoo-ayin-name-page.component';

describe('OrdooAyinNamePageComponent', () => {
  let component: OrdooAyinNamePageComponent;
  let fixture: ComponentFixture<OrdooAyinNamePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdooAyinNamePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdooAyinNamePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
