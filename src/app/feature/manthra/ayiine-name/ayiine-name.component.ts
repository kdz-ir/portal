import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ayiine-name',
  templateUrl: './ayiine-name.component.html',
  styleUrls: ['./ayiine-name.component.scss']
})
export class AyiineNameComponent implements OnInit {
  isReadAll = false;
  constructor () { }
  onScroll(event: { target: HTMLElement; }) {

    if (event.target.offsetHeight + event.target.scrollTop == event.target.scrollHeight) {
      this.isReadAll = true;
    }
  }
  ngOnInit(): void {
  }

}
