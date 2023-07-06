import { TestBed } from '@angular/core/testing';

import { TeamRepositoryService } from './team-repository.service';

describe('TeamRepositoryService', () => {
  let service: TeamRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeamRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
