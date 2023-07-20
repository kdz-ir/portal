import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamListPageComponent } from './team-list-page.component';

describe('TeamListPageComponent', () => {
  let component: TeamListPageComponent;
  let fixture: ComponentFixture<TeamListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamListPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
