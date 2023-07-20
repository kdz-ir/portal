import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantrkParticipatAvestaKhaniComponent } from './mantrk-participat-avesta-khani.component';

describe('MantrkParticipatAvestaKhaniComponent', () => {
  let component: MantrkParticipatAvestaKhaniComponent;
  let fixture: ComponentFixture<MantrkParticipatAvestaKhaniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MantrkParticipatAvestaKhaniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MantrkParticipatAvestaKhaniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
