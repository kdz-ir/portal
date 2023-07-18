import { AfterViewInit, Component } from '@angular/core';
import { SetadRepositoryService } from '../../../services/setad-repository.service';
import { MatTableDataSource } from '@angular/material/table';
import { IDormitories } from '../../../models/idormitories';

@Component({
  selector: 'app-dormitory-list-page',
  templateUrl: './dormitory-list-page.component.html',
  styleUrls: ['./dormitory-list-page.component.scss']
})
export class DormitoryListPageComponent implements AfterViewInit {
  dataSource: MatTableDataSource<IDormitories>;
  displayedColumns: string[] = ['name', 'sex', 'nationalCode', 'city', 'refId', 'type', 'authority', 'created', 'action'];
  constructor (private readonly _setadRepository: SetadRepositoryService) {

  }
  ngAfterViewInit(): void {
    this._setadRepository.dormitories.subscribe(c => this.dataSource = new MatTableDataSource(c));
  }
}
