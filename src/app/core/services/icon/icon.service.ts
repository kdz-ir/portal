import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class IconService {

  constructor (private readonly _iconRegistery: MatIconRegistry, private readonly _domSanitizer: DomSanitizer) {

  }
  init() {
    this._iconRegistery.addSvgIcon('Manthra', this._domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/manthra.svg'));
  }
}
