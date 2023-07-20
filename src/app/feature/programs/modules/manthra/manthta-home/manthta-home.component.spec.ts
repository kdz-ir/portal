import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManthtaHomeComponent } from './manthta-home.component';

describe('ManthtaHomeComponent', () => {
  let component: ManthtaHomeComponent;
  let fixture: ComponentFixture<ManthtaHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManthtaHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManthtaHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
