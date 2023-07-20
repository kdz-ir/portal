import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleTeamDetailPageComponent } from './double-team-detail-page.component';

describe('DoubleTeamDetailPageComponent', () => {
  let component: DoubleTeamDetailPageComponent;
  let fixture: ComponentFixture<DoubleTeamDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoubleTeamDetailPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoubleTeamDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
