import { Component, OnInit } from '@angular/core';
import { LINKS } from '../navigation-list/navigation-list.component';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {
  readonly links = LINKS;
  constructor () { }

  ngOnInit(): void {
  }

}
