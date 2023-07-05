import { Component, OnInit } from '@angular/core';
import { LINKS } from '../navigation-list/navigation-list.component';
import { AuthenticationService } from '../services/authentication/authentication.service';
import { AccessType } from '../model/AccessType';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {
  readonly links = LINKS;
  readonly accessType = AccessType;
  constructor (readonly authService: AuthenticationService) { }

  ngOnInit(): void {
  }

}
