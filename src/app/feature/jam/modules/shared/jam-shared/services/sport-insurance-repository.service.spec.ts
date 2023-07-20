import { TestBed } from '@angular/core/testing';

import { SportInsuranceRepositoryService } from './sport-insurance-repository.service';

describe('SportInsuranceRepositoryService', () => {
  let service: SportInsuranceRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SportInsuranceRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
