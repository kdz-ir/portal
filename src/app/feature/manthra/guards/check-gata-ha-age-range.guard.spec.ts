import { TestBed } from '@angular/core/testing';

import { CheckGataHaAgeRangeGuard } from './check-gata-ha-age-range.guard';

describe('CheckGataHaAgeRangeGuard', () => {
  let guard: CheckGataHaAgeRangeGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CheckGataHaAgeRangeGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
