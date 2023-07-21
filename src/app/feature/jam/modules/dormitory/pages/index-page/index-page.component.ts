import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IDorm } from '../../models/idorm';
import { MatTableDataSource } from '@angular/material/table';
import { FormBuilder, FormControl, FormRecord } from '@angular/forms';
import { isNil } from 'lodash-es';
import { IDormRegister, IDormsRegister } from '../../models/idorms-register';
import { DormitoryRepositoryService } from '../../services/dormitory-repository.service';

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.scss']
})
export class IndexPageComponent implements OnInit {
  dorms: IDorm[];
  fRecord: FormRecord<FormControl<number>>;
  dataSource: MatTableDataSource<IDorm>;
  displayedColumns: string[] = ['index', 'name', 'action', 'refId'];
  constructor (activatedRoute: ActivatedRoute, private readonly _fb: FormBuilder, private readonly _dormRepository: DormitoryRepositoryService) {
    this.dorms = <IDorm[]>activatedRoute.snapshot.data['dorms'];
    this.dataSource = new MatTableDataSource(this.dorms);
    this.fRecord = _fb.record({});
  }
  ngOnInit(): void {
    for (const dorm of this.dorms) {
      const fc = this._fb.control<number>(dorm.dormitory?.type);
      if (!isNil(dorm.dormitory?.authority))
        fc.disable();
      this.fRecord.addControl(dorm.profile.nationalCode, fc);
    }
  }
  onSubmit() {
    const dormslist:IDormRegister[]=[];
    for (const dorm of this.dorms.filter(c => isNil(c.dormitory?.refId))) {
      if(!isNil(this.fRecord.value[dorm.profile.nationalCode]))
      dormslist.push({ nationalCode: dorm.profile.nationalCode, type: this.fRecord.value[dorm.profile.nationalCode] })
    }
    const dormsRegister: IDormsRegister = {
      dorms: dormslist
    };
    this._dormRepository.register(dormsRegister).subscribe(c => window.location.replace(c.action));
  }
}
