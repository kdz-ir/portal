import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate
{
//--
  constructor(private _authService: AuthenticationService, private _router: Router)
  {
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
  {
    if (!this._authService.isAuthenticated)
    {
      // this part is added:{redirect:state.url
      this._router.navigate(['/Authentication'],{queryParams:{redirect:state.url}});
    }
    return this._authService.isAuthenticated;
  }

}
