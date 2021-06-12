import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation-list',
  templateUrl: './navigation-list.component.html'
})
export class NavigationListComponent {
  readonly LINKS = [
    { link: '/', name: 'خانه', icon: 'home', isNative: true },
    { link: '/Manthra', name: 'مانتره', icon: 'Manthra', isNative: false },
    {
      link: '/Settings', name: 'مشخصات کاربری', icon: 'account_circle', isNative: true
    },
    {
      link: '/Settings/logout', name: 'خروج', icon: 'logout', isNative: true
    },
  ];
}
