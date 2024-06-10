import { Component, inject } from '@angular/core';
import { JamRepositoryService } from 'src/app/feature/jam/services/jam-repository.service';
import { SetadRepositoryService } from '../../../setad/services/setad-repository.service';
import * as saveAs from 'file-saver';
import { Workbook } from 'exceljs';
import * as jalaliMoment from 'jalali-moment';
import { Datum, report } from '../../models/report';

@Component({
  selector: 'app-setad-report',
  templateUrl: './setad-report.component.html',
  styleUrls: ['./setad-report.component.scss']
})
export class SetadReportComponent {
  private readonly _setadRepository = inject(SetadRepositoryService)
  loading = false

  constructor(private readonly _JamRepository: JamRepositoryService) { }

  report(fieldId: number) {
    this.loading = true;
    this._JamRepository.preRegisterReport().subscribe((response: report) => {
     
      const filteredData = response.data.filter(item => item.field === fieldId);
      this.excelGenertor(fieldId, filteredData);
    }, () => {
      this.loading = false;
    });
  }

  async excelGenertor(fieldId: number, data: Datum[]) {
    const wb = new Workbook();
    const ws = wb.addWorksheet(fieldId == 1 ? 'آمادگی جسمانی' : 'دوچرخه‌سواری');

    const cols = [
      { name: 'نام و نام خانوادگی' },
      { name: 'تاریخ تولد' },
      { name: 'جنسیت' },
      { name: 'شهر' },
      { name: 'کد ملی' }
    ];

    const rows = data
      .filter(d => d.profile != null) // Ensure d.profile is not null
      .map(d => [
        `${d.profile.name} ${d.profile.family}`,
        d.profile.birthday,
        d.profile.sex,
        d.profile.city,
        d.nationalCode
      ]);

    ws.addTable({ name: 'mytable', headerRow: true, ref: 'A1', rows, columns: cols });
    ws.columns?.forEach(c => c.width = 25);

    saveAs(new Blob([await wb.xlsx.writeBuffer()]), `${jalaliMoment().format('jYYYYjMMjDD-HHmm')}.xlsx`);
    this.loading = false;
  }
}  