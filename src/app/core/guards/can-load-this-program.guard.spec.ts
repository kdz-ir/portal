import { TestBed } from '@angular/core/testing';

import { CanLoadThisProgramGuard } from './can-load-this-program.guard';

describe('CanLoadThisProgramGuard', () => {
  let guard: CanLoadThisProgramGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanLoadThisProgramGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
