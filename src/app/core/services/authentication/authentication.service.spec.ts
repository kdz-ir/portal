import { TestBed } from '@angular/core/testing';

import { AuthenticationService } from './authentication.service';
import { JwtHelperService } from '@auth0/angular-jwt';

describe('AuthenticationService', () => {
  let service: AuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [JwtHelperService, AuthenticationService] });
    service = TestBed.inject(AuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
