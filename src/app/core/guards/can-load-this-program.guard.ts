import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SwalService } from '../services/swal/swal.service';
import { AuthenticationService } from "src/app/core/services/authentication/authentication.service";


export function CanLoadThisProgramGuard(can: boolean): CanActivateFn {
  return () => {
    if (!can) {
      var canRegister = inject(AuthenticationService).getTokenItem<number>("registerPermission") == 1;
      can = canRegister || can;
      if (!canRegister) {
        inject(SwalService).showErrorMessage('در حال حاظر دسترسی به این برنامه محدود شده است.');
      }
    }
    return can;
  };
}
