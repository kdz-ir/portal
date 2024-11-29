import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/core/services/authentication/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent {

  constructor (
    private authService: AuthenticationService,
    private router: Router
  ) {
    this.authService.loginOut().then(() => {
      this.router.navigate(['/login']);
    });
  }

}
