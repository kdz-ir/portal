import { TestBed } from '@angular/core/testing';

import { OrdooAdminGuard } from './ordoo-admin.guard';

describe('OrdooAdminGuard', () => {
  let guard: OrdooAdminGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(OrdooAdminGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
