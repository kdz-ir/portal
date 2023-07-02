import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTeamPageComponent } from './show-team-page.component';

describe('ShowTeamPageComponent', () => {
  let component: ShowTeamPageComponent;
  let fixture: ComponentFixture<ShowTeamPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowTeamPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowTeamPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
