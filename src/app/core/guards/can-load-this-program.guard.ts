import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SwalService } from '../services/swal/swal.service';

export function CanLoadThisProgramGuard(can: boolean): CanActivateFn {
  return () => {
    if (!can)
      inject(SwalService).showErrorMessage('در حال حاظر دسترسی به این برنامه محدود شده است.');
    return can;
  };
}
