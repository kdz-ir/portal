import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation-list',
  templateUrl: './navigation-list.component.html'
})
export class NavigationListComponent {
  readonly LINKS = [
    { link: '/', name: 'خانه', icon: 'home', isNative: true },
    {
      link: '/Settings', name: 'تنظیمات کاربری', icon: 'settings', isNative: true
    },
  ];
}
