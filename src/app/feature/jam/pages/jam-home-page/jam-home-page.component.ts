import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/core/services/authentication/authentication.service';

@Component({
  selector: 'app-jam-home-page',
  templateUrl: './jam-home-page.component.html',
  styleUrls: ['./jam-home-page.component.scss']
})
export class JamHomePageComponent {
  readonly TIME_TO_JAM = new Date(2023, 7, 7, 18, 30).getTime() - new Date().getTime();
  isAdmin: boolean;
  constructor (authService: AuthenticationService) {
    this.isAdmin = authService.getTokenItem<number>('isAdmin')==1;
  }
}
