import { TestBed } from '@angular/core/testing';
import { AuthenticationService } from './authentication.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('AuthenticationService', () => {
  let service: AuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [AuthenticationService]
    });
    service = TestBed.inject(AuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('logout method', () => {
    it('should clear session and close tab', () => {
      spyOn(service, 'loginOut').and.callThrough();
      spyOn(window, 'close').and.callFake(() => {});
      service.loginOut();
      expect(localStorage.getItem('auth_token')).toBeNull();
      expect(window.close).toHaveBeenCalled();
    });
  });
});
