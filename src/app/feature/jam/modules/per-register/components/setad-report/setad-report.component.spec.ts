import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetadReportComponent } from './setad-report.component';

describe('SetadReportComponent', () => {
  let component: SetadReportComponent;
  let fixture: ComponentFixture<SetadReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetadReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetadReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
