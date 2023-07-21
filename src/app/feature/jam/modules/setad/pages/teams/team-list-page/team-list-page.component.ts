import { Component, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { SportField } from 'src/app/feature/jam/models/sport-field';
import { SportSubField } from 'src/app/feature/jam/models/sub-sport-field';
import { IDoubleTeam } from '../../../models/idouble-team';
import { SetadRepositoryService } from '../../../services/setad-repository.service';
import { ITeamsList } from '../../../models/iteams-list';

@Component({
  selector: 'app-team-list-page',
  templateUrl: './team-list-page.component.html',
  styleUrls: ['./team-list-page.component.scss']
})
export class TeamListPageComponent {

  dataSource: MatTableDataSource<ITeamsList>;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] = ['name', 'ageRangeName','genderName', 'created','playersCount', 'action'];
  private _subField: SportSubField;
  private _field: SportField;
  constructor (private readonly _setadRepository: SetadRepositoryService, ac: ActivatedRoute) {
    ac.params.subscribe(c => {
      this._field = <SportField>c['field'];
      this._subField = <SportSubField>c['subField'];
      this.onRefreshClick();
    });
  }
  onRefreshClick() {
    this._setadRepository.teams(this._field, this._subField).subscribe(c => {
      this.dataSource = new MatTableDataSource(c);
      this.dataSource.sort = this.sort;
    });
  }
}
