import { Component } from '@angular/core';
import { Link } from '../model/Link';
import { AccessType } from '../model/AccessType';
import { AuthenticationService } from '../services/authentication/authentication.service';

@Component({
  selector: 'app-navigation-list',
  templateUrl: './navigation-list.component.html',
})
export class NavigationListComponent {
  readonly accessType = AccessType;
  constructor (readonly authService: AuthenticationService) {
  }
  readonly links = LINKS;
}
export const LINKS: Link[] = [
  { path: '/home', name: 'خانه', icon: 'home', isNative: true, access: AccessType.users },
  {
    path: '/jam', name: 'جام‌جانباختگان', icon: 'Jam', isNative: false, access: AccessType.public
  },
  { path: '/Manthra', name: 'مانتره', icon: 'Manthra', isNative: false, access: AccessType.public },

  { path: '/ordoo', name: 'اردو', icon: 'Ordoo', isNative: false, access: AccessType.users },
  {
    path: '/news', name: 'اخبار', icon: 'feed', isNative: true, access: AccessType.public,
  },
  {
    path: '/Settings', name: 'مشخصات کاربری', icon: 'account_circle', isNative: true, access: AccessType.users
  },

];
