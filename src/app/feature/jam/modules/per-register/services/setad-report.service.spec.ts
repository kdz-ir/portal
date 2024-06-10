import { TestBed } from '@angular/core/testing';

import { SetadReportService } from './setad-report.service';

describe('SetadReportService', () => {
  let service: SetadReportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetadReportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
