import { TestBed } from '@angular/core/testing';

import { ManthraReporsitoryService } from './manthra-reporsitory.service';

describe('ManthraReporsitoryService', () => {
  let service: ManthraReporsitoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManthraReporsitoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
