import { TestBed } from '@angular/core/testing';

import { NewsRepositoryService } from './news-repository.service';

describe('NewsRepositoryService', () => {
  let service: NewsRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
