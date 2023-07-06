import { Component, OnInit } from '@angular/core';
import { OrdooService } from '../../services/ordoo.service';
import { saveAs } from 'file-saver';
@Component({
  selector: 'app-ordoo-admin-page',
  templateUrl: './ordoo-admin-page.component.html',
  styleUrls: ['./ordoo-admin-page.component.scss']
})
export class OrdooAdminPageComponent {

  constructor (private readonly _ordooService: OrdooService) { }
  onWantReport() {
    this._ordooService.getReport().subscribe(c => {
      saveAs(new Blob([c]), `ordoo-${new Date().toLocaleString('fa')}.xls`);
    });
  }

}
