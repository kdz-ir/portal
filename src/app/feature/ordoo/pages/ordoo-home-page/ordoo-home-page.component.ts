import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/core/services/authentication/authentication.service';

@Component({
  selector: 'app-ordoo-home-page',
  templateUrl: './ordoo-home-page.component.html',
  styleUrls: ['./ordoo-home-page.component.scss']
})
export class OrdooHomePageComponent implements OnInit {
  isAdmin: number;
  roleId: number;

  constructor (private readonly _authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.isAdmin = this._authenticationService.getTokenItem<number>("isAdmin");
    this.roleId = this._authenticationService.getTokenItem<number>("rule_id");
    console.log(this.isAdmin);

  }
  onDeleteCatch() {
    localStorage.removeItem("ordooForm");
  }
}
