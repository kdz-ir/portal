import { Component } from '@angular/core';
import { IconService } from './core/services/icon/icon.service';
import { VERSION } from '../environments/version';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  readonly githash = VERSION.hash;
  constructor (readonly iconService: IconService) {
    iconService.init();
  }
}
