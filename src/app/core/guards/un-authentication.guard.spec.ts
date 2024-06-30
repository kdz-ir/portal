import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { UnAuthenticationGuard } from './un-authentication.guard';
import { AuthenticationService } from '../services/authentication/authentication.service';
import { Router } from '@angular/router';
import { of } from 'rxjs';

describe('UnAuthenticationGuard', () => {
  let guard: UnAuthenticationGuard;
  let authService: AuthenticationService;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        UnAuthenticationGuard,
        {
          provide: AuthenticationService,
          useValue: jasmine.createSpyObj('AuthenticationService', ['isAuthenticated'])
        },
        {
          provide: Router,
          useValue: jasmine.createSpyObj('Router', ['navigate'])
        }
      ]
    });
    guard = TestBed.inject(UnAuthenticationGuard);
    authService = TestBed.inject(AuthenticationService);
    router = TestBed.inject(Router);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should redirect to home page if authenticated', (done) => {
    authService.isAuthenticated.and.returnValue(true);
    guard.canActivate().subscribe(isAllowed => {
      expect(isAllowed).toEqual(false);
      expect(router.navigate).toHaveBeenCalledWith(['/home']);
      done();
    });
  });

  it('should allow navigation to login if not authenticated', (done) => {
    authService.isAuthenticated.and.returnValue(false);
    guard.canActivate().subscribe(isAllowed => {
      expect(isAllowed).toEqual(true);
      expect(router.navigate).not.toHaveBeenCalled();
      done();
    });
  });
});
