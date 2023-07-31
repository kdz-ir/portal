import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsListPageComponent } from './cards-list-page.component';

describe('CardsListPageComponent', () => {
  let component: CardsListPageComponent;
  let fixture: ComponentFixture<CardsListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsListPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
