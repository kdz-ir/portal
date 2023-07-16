import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleListPageComponent } from './double-list-page.component';

describe('DoubleListPageComponent', () => {
  let component: DoubleListPageComponent;
  let fixture: ComponentFixture<DoubleListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoubleListPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoubleListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
