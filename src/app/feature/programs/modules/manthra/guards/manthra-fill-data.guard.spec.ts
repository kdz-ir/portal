import { TestBed } from '@angular/core/testing';

import { ManthraFillDataGuard } from './manthra-fill-data.guard';

describe('ManthraFillDataGuard', () => {
  let guard: ManthraFillDataGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ManthraFillDataGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
