import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvastaKhaniAyinNameComponent } from './avasta-khani-ayin-name.component';

describe('AvastaKhaniAyinNameComponent', () => {
  let component: AvastaKhaniAyinNameComponent;
  let fixture: ComponentFixture<AvastaKhaniAyinNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvastaKhaniAyinNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvastaKhaniAyinNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
