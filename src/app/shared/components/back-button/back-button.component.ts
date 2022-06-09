import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.scss']
})
export class BackButtonComponent implements OnInit {

  constructor (private readonly _locationService: Location) { }

  ngOnInit(): void {
  }
  onBackClick() {
    this._locationService.back();
  }
}
