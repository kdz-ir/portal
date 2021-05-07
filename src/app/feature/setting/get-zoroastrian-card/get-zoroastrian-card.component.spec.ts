import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetZoroastrianCardComponent } from './get-zoroastrian-card.component';

describe('GetZoroastrianCardComponent', () => {
  let component: GetZoroastrianCardComponent;
  let fixture: ComponentFixture<GetZoroastrianCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetZoroastrianCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetZoroastrianCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
