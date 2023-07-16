import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IDoubleTeam } from '../../../models/idouble-team';
import { SetadRepositoryService } from '../../../services/setad-repository.service';
import { ActivatedRoute } from '@angular/router';
import { SportField } from 'src/app/feature/jam/models/sport-field';
import { SportSubField } from 'src/app/feature/jam/models/sub-sport-field';

@Component({
  selector: 'app-double-list-page',
  templateUrl: './double-list-page.component.html',
  styleUrls: ['./double-list-page.component.scss']
})
export class DoubleListPageComponent implements AfterViewInit {
  dataSource: MatTableDataSource<IDoubleTeam>;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] = ['name', 'ageRangeName', 'created', 'action'];
  private _subField: SportSubField;
  private _field: SportField;
  constructor (private readonly _setadRepository: SetadRepositoryService, ac: ActivatedRoute) {
    this._field = <SportField>ac.snapshot.params['field'];
    this._subField = <SportSubField>ac.snapshot.params['subField'];
  }
  ngAfterViewInit(): void {
    this.onRefreshClick();
  }
  onRefreshClick() {
    this._setadRepository.doubleTeams(this._field, this._subField).subscribe(c => {
      this.dataSource = new MatTableDataSource(c);
      this.dataSource.sort = this.sort;
    });
  }
}
