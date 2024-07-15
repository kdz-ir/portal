import { AfterContentInit, AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IPlayer } from '../../../../shared/jam-shared/models/IPlayer';
import { SetadRepositoryService } from '../../../services/setad-repository.service';
import { Workbook } from 'exceljs';
import * as saveAs from 'file-saver';
import * as jalaliMoment from 'jalali-moment';
@Component({
  selector: 'app-all-player-page',
  templateUrl: './all-player-page.component.html',
  styleUrls: ['./all-player-page.component.scss']
})
export class AllPlayerPageComponent implements AfterViewInit {
  dataSource: MatTableDataSource<IPlayer>;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] = ['name', 'sex', 'nationalCode', 'ageRangeName', 'fieldName', 'subFieldName', 'city', 'created', 'action'];
  data: IPlayer[];
  constructor (private _setadRepository: SetadRepositoryService) {

  }
  ngAfterViewInit(): void {
    this.onRefreshClick();
  }

  onRefreshClick() {
    this._setadRepository.allPlayers.subscribe(c => {
      this.data = c;
      this.dataSource = new MatTableDataSource(c);
      this.dataSource.sort = this.sort;
    });
  }
  async onDownloadExport() {
    const wb = new Workbook();
    const ws = wb.addWorksheet('bozorg sal man');
    const cols = [{ name: 'نام و نام خانوادگی' }, { name: 'رده' }, { name: 'رشته' }, { name: 'زیر رشته' }, { name: 'جنسیت' }, { name: 'شهر' }, { name: 'کد ملی' }];
    const row = this.data.map(d => ([d.profile.name + ' ' + d.profile.family, d.ageRangeName, d.fieldName, d.subFieldName, d.profile.sex, d.profile.city, d.nationalCode,]));
    ws.addTable({ name: 'mytable', headerRow: true, ref: 'A1', rows: row, columns: cols });
    ws.columns?.forEach(c => c.width = 25);
    saveAs(new Blob([await wb.xlsx.writeBuffer()]), `${jalaliMoment().format('jYYYYjMMjDD-HHmm')}.xlsx`);
  }
}

