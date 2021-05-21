import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectSectionComponent } from './select-section.component';

describe('SelectSectionComponent', () => {
  let component: SelectSectionComponent;
  let fixture: ComponentFixture<SelectSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
