import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectBasedComponent } from './project-based.component';

describe('ProjectBasedComponent', () => {
  let component: ProjectBasedComponent;
  let fixture: ComponentFixture<ProjectBasedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectBasedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectBasedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
