import { AfterContentInit, AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IPlayer } from '../../../../shared/jam-shared/models/IPlayer';
import { SetadRepositoryService } from '../../../services/setad-repository.service';

@Component({
  selector: 'app-all-player-page',
  templateUrl: './all-player-page.component.html',
  styleUrls: ['./all-player-page.component.scss']
})
export class AllPlayerPageComponent implements AfterViewInit {
  dataSource: MatTableDataSource<IPlayer>;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] = ['name', 'sex', 'nationalCode', 'ageRangeName','fieldName','subFieldName','city', 'created', 'action'];
  constructor(private _setadRepository:SetadRepositoryService) {
    
  }
  ngAfterViewInit(): void {
    this.onRefreshClick();
  }

  onRefreshClick() {
    this._setadRepository.allPlayers.subscribe(c => {
      this.dataSource = new MatTableDataSource(c);
      this.dataSource.sort = this.sort;
    });
  }
}
