import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation-list',
  templateUrl: './navigation-list.component.html',
})
export class NavigationListComponent {
  readonly links = LINKS;
}
export const LINKS = [
  { link: '/home', name: 'خانه', icon: 'home', isNative: true },
  {
    link: '/jam', name: 'جام‌جانباختگان', icon: 'Jam', isNative: false
  },
  { link: '/Manthra', name: 'مانتره', icon: 'Manthra', isNative: false },

  { link: '/ordoo', name: 'اردو', icon: 'Ordoo', isNative: false },
  {
    link: '/news', name: 'اخبار', icon: 'feed', isNative: true
  },
  {
    link: '/Settings', name: 'مشخصات کاربری', icon: 'account_circle', isNative: true
  },

];