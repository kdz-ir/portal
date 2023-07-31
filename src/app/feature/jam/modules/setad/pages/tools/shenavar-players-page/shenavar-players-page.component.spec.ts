import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShenavarPlayersPageComponent } from './shenavar-players-page.component';

describe('ShenavarPlayersPageComponent', () => {
  let component: ShenavarPlayersPageComponent;
  let fixture: ComponentFixture<ShenavarPlayersPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShenavarPlayersPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShenavarPlayersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
