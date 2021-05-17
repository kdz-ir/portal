import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { SwalService } from '../services/swal/swal.service';
import { CoreProfileService } from '../services/user/core-profile.service';

@Injectable({
  providedIn: 'root'
})
export class ValidProfileGuard implements CanActivate {
  constructor (private readonly _coreProfileService: CoreProfileService, private readonly _swalService: SwalService, private readonly _router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this._coreProfileService.checkProfileStatus().pipe(tap(async (c) => {
      if (!c.status) {
        await this._swalService.swal.fire({
          title: 'پروفایل شما کامل نشده است',
          text: 'لطفا پرفایل خود کامل کنید.',
          icon: 'error',
          confirmButtonText: 'بریم کامل کنیم.'
        });
        this._router.navigate(['/Settings']);
      }

    }), map(c => c.status));
  }

}
