import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderteenComponent } from './underteen.component';

describe('UnderteenComponent', () => {
  let component: UnderteenComponent;
  let fixture: ComponentFixture<UnderteenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnderteenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnderteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
