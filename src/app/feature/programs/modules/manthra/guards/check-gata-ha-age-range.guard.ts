import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { SwalService } from 'src/app/core/services/swal/swal.service';
import { ManthraReporsitoryService } from '../services/manthra-reporsitory.service';

@Injectable({
  providedIn: 'root'
})
export class CheckGataHaAgeRangeGuard implements CanActivate {
  constructor (private readonly _repos: ManthraReporsitoryService,private readonly _swal:SwalService) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this._repos.gataHaHaveReqiuredAge().pipe(tap(c=>{
    if(c.status){
      this._swal.accessRegister();
    }
    }),map(c=>!c.status));
  }
  
}
