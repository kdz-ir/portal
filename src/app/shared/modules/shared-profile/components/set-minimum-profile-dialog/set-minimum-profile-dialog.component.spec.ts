import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetMinimumProfileDialogComponent } from './set-minimum-profile-dialog.component';

describe('SetMinimumProfileDialogComponent', () => {
  let component: SetMinimumProfileDialogComponent;
  let fixture: ComponentFixture<SetMinimumProfileDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetMinimumProfileDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetMinimumProfileDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
