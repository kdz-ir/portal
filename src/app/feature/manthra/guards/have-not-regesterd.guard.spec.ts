import { TestBed } from '@angular/core/testing';

import { HaveNotRegesterdGuard } from './have-not-regesterd.guard';

describe('HaveNotRegesterdGuard', () => {
  let guard: HaveNotRegesterdGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(HaveNotRegesterdGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
