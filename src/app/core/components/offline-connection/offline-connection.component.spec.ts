import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OfflineConnectionComponent } from './offline-connection.component';

describe('OfflineConnectionComponent', () => {
  let component: OfflineConnectionComponent;
  let fixture: ComponentFixture<OfflineConnectionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OfflineConnectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfflineConnectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
