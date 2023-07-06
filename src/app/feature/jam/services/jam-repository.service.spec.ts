import { TestBed } from '@angular/core/testing';

import { JamRepositoryService } from './jam-repository.service';

describe('JamRepositoryService', () => {
  let service: JamRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JamRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
