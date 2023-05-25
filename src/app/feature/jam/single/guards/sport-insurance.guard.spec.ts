import { TestBed } from '@angular/core/testing';

import { SportInsuranceGuard } from './sport-insurance.guard';

describe('SportInsuranceGuard', () => {
  let guard: SportInsuranceGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SportInsuranceGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
