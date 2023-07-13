import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ManthraReporsitoryService } from '../services/manthra-reporsitory.service';

@Injectable({
  providedIn: 'root'
})
export class ManthraFillDataGuard implements CanActivate {
  constructor (private readonly repository: ManthraReporsitoryService, private readonly _router: Router) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.repository.getUserStatus().pipe(tap(c => {
      if (c === false) {
        this._router.navigate(['/Settings/zoroastrianCard']);
      }
    }));
  }

}
