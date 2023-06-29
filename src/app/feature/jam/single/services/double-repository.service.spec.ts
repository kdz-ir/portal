import { TestBed } from '@angular/core/testing';

import { DoubleRepositoryService } from './double-repository.service';

describe('DoubleRepositoryService', () => {
  let service: DoubleRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoubleRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
