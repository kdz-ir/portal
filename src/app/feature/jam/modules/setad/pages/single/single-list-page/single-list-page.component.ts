import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IPlayer } from '../../../../shared/jam-shared/models/IPlayer';
import { SetadRepositoryService } from '../../../services/setad-repository.service';
import { ActivatedRoute } from '@angular/router';
import { SportField } from 'src/app/feature/jam/models/sport-field';
import { SportSubField } from 'src/app/feature/jam/models/sub-sport-field';

@Component({
  selector: 'app-single-list-page',
  templateUrl: './single-list-page.component.html',
  styleUrls: ['./single-list-page.component.scss']
})
export class SingleListPageComponent implements AfterViewInit {
  dataSource: MatTableDataSource<IPlayer>;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] = ['name', 'sex', 'nationalCode', 'ageRangeName', 'city', 'created', 'action'];
  private _field: SportField;
  private _subField: SportSubField;
  constructor (private readonly _setadRepository: SetadRepositoryService, activatedRoute: ActivatedRoute) {
    this._field = <SportField>activatedRoute.snapshot.params['field'];
    this._subField = <SportSubField>activatedRoute.snapshot.params['subField'];
  }
  ngAfterViewInit(): void {
    this.onRefreshClick();
  }

  onRefreshClick() {
    this._setadRepository.singlePlayers(this._field, this._subField).subscribe(c => {
      this.dataSource = new MatTableDataSource(c);
      this.dataSource.sort = this.sort;
    });
  }
}
