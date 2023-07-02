import { TestBed } from '@angular/core/testing';

import { SingleRepositoryService } from './single-repository.service';

describe('SingleRepositoryService', () => {
  let service: SingleRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SingleRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
