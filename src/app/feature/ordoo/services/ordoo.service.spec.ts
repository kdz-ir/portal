import { TestBed } from '@angular/core/testing';

import { OrdooService } from './ordoo.service';

describe('OrdooService', () => {
  let service: OrdooService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdooService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
