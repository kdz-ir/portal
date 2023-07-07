import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramsListPageComponent } from './programs-list-page.component';

describe('ProgramsListPageComponent', () => {
  let component: ProgramsListPageComponent;
  let fixture: ComponentFixture<ProgramsListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramsListPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgramsListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
