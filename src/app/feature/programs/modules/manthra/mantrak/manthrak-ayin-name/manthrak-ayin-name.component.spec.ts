import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManthrakAyinNameComponent } from './manthrak-ayin-name.component';

describe('ManthrakAyinNameComponent', () => {
  let component: ManthrakAyinNameComponent;
  let fixture: ComponentFixture<ManthrakAyinNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManthrakAyinNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManthrakAyinNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
