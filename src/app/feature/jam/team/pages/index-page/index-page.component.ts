import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { ITeamsList } from '../../models/iteams-list';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.scss']
})
export class IndexPageComponent implements OnInit, AfterViewInit {
  private readonly _teams: ITeamsList[];
  dataSource: MatTableDataSource<ITeamsList>;
  displayedColumns: string[] = [ 'name','fieldName','subFieldName','ageRangeName','players', 'action'];
  @ViewChild(MatSort) sort: MatSort;
  constructor (private readonly _activatedRoute: ActivatedRoute) {
    this._teams = <ITeamsList[]>_activatedRoute.snapshot.data['teams'];
  }
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }
  ngOnInit(): void {
    this.dataSource=new MatTableDataSource(this._teams)
  }
}
