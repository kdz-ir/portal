import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { ITeamsList } from '../../models/iteams-list';
import { MatSort } from '@angular/material/sort';
import { MediaMatcher } from '@angular/cdk/layout';
import { remove } from 'lodash-es';

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.scss']
})
export class IndexPageComponent implements OnInit, AfterViewInit, OnDestroy {
  private readonly _teams: ITeamsList[];
  dataSource: MatTableDataSource<ITeamsList>;
  displayedColumns: string[] = ['index', 'name', 'fieldName', 'subFieldName', 'ageRangeName', 'players'];
  @ViewChild(MatSort) sort: MatSort;
  private _mediaMatcher: MediaQueryList;
  _mobileMatcher: (t: MediaQueryListEvent) => void;
  constructor (private readonly _activatedRoute: ActivatedRoute, media: MediaMatcher) {
    this._teams = <ITeamsList[]>_activatedRoute.snapshot.data['teams'];
    this._mediaMatcher = media.matchMedia('(min-width: 959px)');
    this._mobileMatcher = (t: MediaQueryListEvent) => {
      if (t.matches && !this.displayedColumns.includes('action')) {
        this.displayedColumns.push('action');
      }
      if (!t.matches && this.displayedColumns.includes('action')) {
        this.displayedColumns = remove(this.displayedColumns, c => c != 'action');
      }
    };
    this._mediaMatcher.addEventListener('change', this._mobileMatcher);
  }
  ngOnDestroy(): void {
    this._mediaMatcher.removeEventListener('change', this._mobileMatcher);
  }
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }
  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this._teams);
    if (this._mediaMatcher.matches) {
      this.displayedColumns.push('action');
    }
  }
}
