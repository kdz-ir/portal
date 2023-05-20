import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { __assign } from 'tslib';

@Injectable({
  providedIn: 'root'
})
export class SnakBarService {

  constructor (private readonly _snackBar: MatSnackBar) { }
  deviceOffline(): void {
    this._snackBar.open('دسترسی به این امکان در زمانی که آنلاین می باشد ممکن است!');
  }
  geoFenceDeActive() {
    this._snackBar.open('شما تنظیمات محدوده تردد رو فعال نکردید.');
  }
  deviceDeleted() {
    this._snackBar.open('ردیاب شما حذف گردید.');
  }
}
