import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleListPageComponent } from './single-list-page.component';

describe('SingleListPageComponent', () => {
  let component: SingleListPageComponent;
  let fixture: ComponentFixture<SingleListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleListPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
