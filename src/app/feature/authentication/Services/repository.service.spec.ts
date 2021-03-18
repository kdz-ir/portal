import { TestBed } from '@angular/core/testing';

import { RepositoryService } from './repository.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('RepositoryService', () => {
  let service: RepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [HttpClientModule] });
    service = TestBed.inject(RepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
