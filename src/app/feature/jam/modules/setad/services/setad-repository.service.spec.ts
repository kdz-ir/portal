import { TestBed } from '@angular/core/testing';

import { SetadRepositoryService } from './setad-repository.service';

describe('SetadRepositoryService', () => {
  let service: SetadRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetadRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
