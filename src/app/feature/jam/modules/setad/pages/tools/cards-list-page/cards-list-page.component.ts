import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { IPlayer } from '../../../../shared/jam-shared/models/IPlayer';
import { SetadRepositoryService } from '../../../services/setad-repository.service';
import { ICard } from '../../../models/icard';

@Component({
  selector: 'app-cards-list-page',
  templateUrl: './cards-list-page.component.html',
  styleUrls: ['./cards-list-page.component.scss']
})
export class CardsListPageComponent {
  dataSource: MatTableDataSource<ICard>;
  displayedColumns: string[] = ['name', 'nationalCode', 'ageRangeName','fieldName','city'];
  constructor(private _setadRepository:SetadRepositoryService) {
    
  }
  ngAfterViewInit(): void {
    this.onRefreshClick();
  }

  onRefreshClick() {
    this._setadRepository.cards.subscribe(c => {
      this.dataSource = new MatTableDataSource(c);
    });
  }
}
