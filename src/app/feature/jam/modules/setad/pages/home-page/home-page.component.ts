import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { SetadRepositoryService } from '../../services/setad-repository.service';
import { MatTableDataSource } from '@angular/material/table';
import { IPlayer } from '../../../shared/jam-shared/models/IPlayer';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements AfterViewInit {
  dataSource: MatTableDataSource<IPlayer>;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] = ['name','fieldName','subFieldName','sex', 'idCard', 'nationalCode','ageRangeName','image','playerType', 'action'];
  constructor (private readonly _setadRepository: SetadRepositoryService) {

  }
  ngAfterViewInit(): void {
    this.onRefreshClick();
  }

  onRefreshClick(){
    this._setadRepository.allPlayers.subscribe(c => {
      
      this.dataSource = new MatTableDataSource(c);
      this.dataSource.sort=this.sort;
    });
  }
}
