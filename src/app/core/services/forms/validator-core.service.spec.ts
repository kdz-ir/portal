import { TestBed } from '@angular/core/testing';

import { ValidatorCoreService } from './validator-core.service';

describe('ValidatorCoreService', () => {
  let service: ValidatorCoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidatorCoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
