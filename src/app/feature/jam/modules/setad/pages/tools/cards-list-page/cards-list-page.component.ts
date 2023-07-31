import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { IPlayer } from '../../../../shared/jam-shared/models/IPlayer';
import { SetadRepositoryService } from '../../../services/setad-repository.service';
import { ICard } from '../../../models/icard';
import * as saveAs from 'file-saver';
import * as moment from 'jalali-moment';

@Component({
  selector: 'app-cards-list-page',
  templateUrl: './cards-list-page.component.html',
  styleUrls: ['./cards-list-page.component.scss']
})
export class CardsListPageComponent {
  dataSource: MatTableDataSource<ICard>;
  displayedColumns: string[] = ['name', 'nationalCode', 'ageRangeName','fieldName','city'];
  data: ICard[];
  constructor(private _setadRepository:SetadRepositoryService) {
    
  }
  ngAfterViewInit(): void {
    this.onRefreshClick();
  }
  onDownloadExport(){
    saveAs(new Blob([JSON.stringify(this.data)]), `${moment().format('jDD-HH-mm-ss')}.json`);
  }
  onRefreshClick() {
    this._setadRepository.cards.subscribe(c => {
      this.data=c;
      this.dataSource = new MatTableDataSource(c);
    });
  }
}
