import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DormitoryInfoPageComponent } from './dormitory-info-page.component';

describe('DormitoryInfoPageComponent', () => {
  let component: DormitoryInfoPageComponent;
  let fixture: ComponentFixture<DormitoryInfoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DormitoryInfoPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DormitoryInfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
