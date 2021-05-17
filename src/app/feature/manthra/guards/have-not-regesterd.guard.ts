import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ManthraReporsitoryService } from '../services/manthra-reporsitory.service';

@Injectable({
  providedIn: 'root'
})
export class HaveNotRegesterdGuard implements CanActivate {
  /**
   *
   */
  constructor (private readonly _repos: ManthraReporsitoryService) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this._repos.checkStepoFRegster().pipe(map(c => c.entity.step != 100));
  }

}
