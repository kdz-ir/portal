import { TestBed } from '@angular/core/testing';

import { CoreProfileService } from './core-profile.service';

describe('CoreProfileService', () => {
  let service: CoreProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoreProfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
