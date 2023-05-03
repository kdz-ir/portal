import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordoo-home-page',
  templateUrl: './ordoo-home-page.component.html',
  styleUrls: ['./ordoo-home-page.component.scss']
})
export class OrdooHomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onDeleteCatch()
  {
    localStorage.removeItem("ordooForm")
  }
}
