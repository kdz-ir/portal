import { TestBed } from '@angular/core/testing';

import { UnAuthenticationGuard } from './un-authentication.guard';

describe('UnAuthenticationGuard', () => {
  let guard: UnAuthenticationGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UnAuthenticationGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
