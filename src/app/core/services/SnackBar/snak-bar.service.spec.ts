import { TestBed } from '@angular/core/testing';

import { SnakBarService } from './snak-bar.service';

describe('SnakBarServiceService', () =>
{
  let service: SnakBarService;

  beforeEach(() =>
  {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SnakBarService);
  });

  it('should be created', () =>
  {
    expect(service).toBeTruthy();
  });
});
