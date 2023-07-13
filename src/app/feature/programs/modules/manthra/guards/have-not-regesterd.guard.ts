import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { SwalService } from 'src/app/core/services/swal/swal.service';
import { environment } from 'src/environments/environment';
import { ManthraReporsitoryService } from '../services/manthra-reporsitory.service';

@Injectable({
  providedIn: 'root'
})
export class HaveNotRegesterdGuard implements CanActivate {
  /**
   *
   */
  constructor (private readonly _repos: ManthraReporsitoryService, private readonly _swalService: SwalService) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (environment.production)
      return this._repos.checkStepoFRegster().pipe(tap(c => {
        if (c.entity.step == 100)
          this._swalService.accessRegister();
      }), map(c => c.entity.step != 100));
    return true;
  }

}
