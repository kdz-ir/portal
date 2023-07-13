import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdooAdminPageComponent } from './ordoo-admin-page.component';

describe('OrdooAdminPageComponent', () => {
  let component: OrdooAdminPageComponent;
  let fixture: ComponentFixture<OrdooAdminPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdooAdminPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdooAdminPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
