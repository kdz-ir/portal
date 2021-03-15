import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class UnAuthenticationGuard implements CanActivate
{
  constructor(private readonly _authService: AuthenticationService, private readonly _router: Router)
  {
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
  {
    if (this._authService.isAuthenticated)
    {
      this._router.navigate(['/']);
    }
    return !this._authService.isAuthenticated;
  }

}
