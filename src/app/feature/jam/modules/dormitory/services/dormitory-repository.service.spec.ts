import { TestBed } from '@angular/core/testing';

import { DormitoryRepositoryService } from './dormitory-repository.service';

describe('DormitoryRepositoryService', () => {
  let service: DormitoryRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DormitoryRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
