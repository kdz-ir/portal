import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpThirteenComponent } from './up-thirteen.component';

describe('UpThirteenComponent', () => {
  let component: UpThirteenComponent;
  let fixture: ComponentFixture<UpThirteenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpThirteenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpThirteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
