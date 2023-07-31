import { AfterViewInit, Component } from '@angular/core';
import { SetadRepositoryService } from '../../../services/setad-repository.service';
import { MatTableDataSource } from '@angular/material/table';
import { IDormitories } from '../../../models/idormitories';
import { Workbook } from 'exceljs';
import * as jalaliMoment from 'jalali-moment';
import * as saveAs from 'file-saver';
import { isEmpty } from 'lodash-es';
import * as moment from 'jalali-moment';
@Component({
  selector: 'app-dormitory-list-page',
  templateUrl: './dormitory-list-page.component.html',
  styleUrls: ['./dormitory-list-page.component.scss']
})
export class DormitoryListPageComponent implements AfterViewInit {
  dataSource: MatTableDataSource<IDormitories>;
  displayedColumns: string[] = ['name', 'sex', 'nationalCode', 'userCode', 'city', 'refId', 'type', 'authority', 'created', 'action'];
  data: IDormitories[];
  constructor (private readonly _setadRepository: SetadRepositoryService) {

  }
  ngAfterViewInit(): void {
    this._setadRepository.dormitories.subscribe(c => {
      this.data = c;
      this.dataSource = new MatTableDataSource(c);
    });
  }
  async onDownloadExport() {
    const wb = new Workbook();
    const ws = wb.addWorksheet('dormitory', { views: [{ rightToLeft: true }] });
    const cols = [{ name: 'نام و نام خانوادگی' }, { name: 'امکانات' }, { name: 'ثبت کننده' },
    { name: 'جنسیت' }, { name: 'شهر' }, { name: 'کد ملی' }, { name: 'شماره پرداخت' }, { name: 'شناسه پرداخت' }, { name: 'زمان ثبت' }];
    const row = this.data.map(d => ([d.profile.name + ' ' + d.profile.family, this._typeName(d.type), d.userCodeProfile.name + ' ' + d.userCodeProfile.family, d.profile.sex, d.profile.city, d.nationalCode, d?.refId, d.authority, moment(d.created).format('jMM-jDD HH:mm:ss')]));
    ws.addTable({ name: 'mytable', headerRow: true, ref: 'A1', rows: row, columns: cols });
    ws.columns?.forEach(c => c.width = 25);
    saveAs(new Blob([await wb.xlsx.writeBuffer()]), `dormitory-${jalaliMoment().format('jYYYYjMMjDD-HHmm')}.xlsx`);
  }
  private _typeName(type: number) {
    switch (type) {
      case 1:
        return 'بدون غذا';
      case 2: return 'فقط شام';
      case 3: return 'کامل';
    }
  }
}
