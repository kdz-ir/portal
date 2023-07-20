import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AyiineNameComponent } from './ayiine-name.component';

describe('AyiineNameComponent', () => {
  let component: AyiineNameComponent;
  let fixture: ComponentFixture<AyiineNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AyiineNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AyiineNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
