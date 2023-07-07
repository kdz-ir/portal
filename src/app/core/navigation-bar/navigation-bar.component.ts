import { Component, OnInit } from '@angular/core';
import { BaseLinks } from '../navigation-list/navigation-list.component';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {
  readonly links = [...BaseLinks,  { link: '/programs', name: 'برنامه ها', icon: 'event_list', isNative: true }];
  constructor () { }

  ngOnInit(): void {
  }

}
