import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'kdz-offline-connection',
  templateUrl: './offline-connection.component.html',
  styleUrls: ['./offline-connection.component.scss']
})
export class OfflineConnectionComponent implements OnInit {
  connectionStatus: boolean;
  constructor () { }

  ngOnInit(): void {
    this.connectionStatus = navigator.onLine;
    window.addEventListener('online', this._onOnLine.bind(this));
    window.addEventListener('offline', this._onoffline.bind(this));
  }
  _onoffline() {
    this.connectionStatus = false;
  }
  _onOnLine() {
    this.connectionStatus = true;
  }
}
