import { TestBed } from '@angular/core/testing';

import { ValidProfileGuard } from './valid-profile.guard';

describe('ValidProfileGuard', () => {
  let guard: ValidProfileGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ValidProfileGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
