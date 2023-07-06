import { TestBed } from '@angular/core/testing';

import { PaymentRepositoryService } from './payment-repository.service';

describe('PaymentRepositoryService', () => {
  let service: PaymentRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaymentRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
