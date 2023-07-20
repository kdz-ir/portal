import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DormitoryListPageComponent } from './dormitory-list-page.component';

describe('DormitoryListPageComponent', () => {
  let component: DormitoryListPageComponent;
  let fixture: ComponentFixture<DormitoryListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DormitoryListPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DormitoryListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
