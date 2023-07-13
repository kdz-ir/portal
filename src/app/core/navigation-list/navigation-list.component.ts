import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation-list',
  templateUrl: './navigation-list.component.html',
})
export class NavigationListComponent {
  readonly links = [...BaseLinks, ...LINKS];
}
export const LINKS = [

  {
    link: '/jam', name: 'جام‌جانباختگان', icon: 'Jam', isNative: false
  },
  { link: '/programs/startup-weekend', name: 'استارتاپ ویکند', icon: 'Startup-weekend', isNative: false },
  { link: '/Manthra', name: 'مانتره', icon: 'Manthra', isNative: false },

  { link: '/ordoo', name: 'اردو', icon: 'Ordoo', isNative: false },

  // {
  //   link: '/Settings', name: 'مشخصات کاربری', icon: 'account_circle', isNative: true
  // },

];
export const BaseLinks = [
  { link: '/home', name: 'خانه', icon: 'home', isNative: true },
  {
    link: '/news', name: 'اخبار', icon: 'feed', isNative: true
  },
];