import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { uniq } from 'lodash';
import { ValidatorCoreService } from 'src/app/core/services/forms/validator-core.service';
import { SwalService } from 'src/app/core/services/swal/swal.service';
import { gataHaRegisterFiled } from '../../models/gata-ha-register-field-enum';
import { ManthraReporsitoryService } from '../../services/manthra-reporsitory.service';

@Component({
  selector: 'app-azad',
  templateUrl: './azad.component.html',
  styleUrls: ['./azad.component.scss']
})
export class AzadComponent implements OnInit {
  ageRange = 0;
  azadForm: FormGroup;
  constructor (private readonly _fb: FormBuilder, private readonly _router: Router, private readonly _repository: ManthraReporsitoryService, private _swal: SwalService) {
    this.azadForm = _fb.group({
      wantAsli: [],
      wantJanbi: [],
      iiarNationalCodeAsli1: [, [ValidatorCoreService.nationalCodeChecker]],
      iiarNationalCodeAsli0: [, [ValidatorCoreService.nationalCodeChecker]],
      iiarNationalCodeAsli2: [, [ValidatorCoreService.nationalCodeChecker]],
      iiarNationalCodeJanbi2: [, [ValidatorCoreService.nationalCodeChecker]],
      iiarNationalCodeJanbi1: [, [ValidatorCoreService.nationalCodeChecker]],
      iiarNationalCodeJanbi0: [, [ValidatorCoreService.nationalCodeChecker]],
      isOrdooHamayesh: [false],
      learnPC: [],
      ravanShenasi: [],
      amazingFact: [],
      other: [],
      digitalMarket: [],
      startup: [],
      bitcoin: [],
      research: []
    });
  }
  onblurInput(control: AbstractControl) {
    if (control.valid && control.value != null)
      this._repository.canPersionRegister(control.value).subscribe(c => {
        console.log(c);

      }, () => {
        control.setValue('');
      });
  }
  ngOnInit(): void {
    this._repository.getAgeRange().subscribe(c => {
      this.ageRange = c.entity.ageType;

    });
  }
  onSubmit() {
    const values = this.azadForm.value;
    const iiarNationalCodeAsli = [];
    const iiarNationalCodeJanbi = [];
    let resgfiled = [];
    if (values.wantJanbi) {
      resgfiled.push(gataHaRegisterFiled.Janbi);
      if (values.iiarNationalCodeJanbi0 != null) {
        iiarNationalCodeJanbi.push(values.iiarNationalCodeJanbi0);
      }
      if (values.iiarNationalCodeJanbi1 != null) {
        iiarNationalCodeJanbi.push(values.iiarNationalCodeJanbi1);
      }
      if (values.iiarNationalCodeJanbi2 != null) {
        iiarNationalCodeJanbi.push(values.iiarNationalCodeJanbi2);
      }
    }
    if (values.wantAsli) {
      resgfiled.push(gataHaRegisterFiled.Asli);

      if (values.iiarNationalCodeAsli0 != null) {
        iiarNationalCodeAsli.push(values.iiarNationalCodeAsli0);
      }
      if (values.iiarNationalCodeAsli1 != null) {
        iiarNationalCodeAsli.push(values.iiarNationalCodeAsli2);
      }
      if (values.iiarNationalCodeAsli2 != null) {
        iiarNationalCodeAsli.push(values.iiarNationalCodeAsli2);
      }
    }
    const data = {
      registerFiled: resgfiled,
      isOrdooHamayesh: values.isOrdooHamayesh,
      iiarNationalCodeAsli: uniq(iiarNationalCodeAsli),
      iiarNationalCodeJanbi: uniq(iiarNationalCodeJanbi),
      ageType: this.ageRange,
      isProjectBase: false,
      step: 100,
      state: 'end',
      oordoHamayesh: {
        learnPC: values.learnPC,
        ravanShenasi: values.ravanShenasi,
        amazingFact: values.amazingFact,
        other: values.other,
        digitalMarket: values.digitalMarket,
        startup: values.startup,
        bitcoin: values.bitcoin,
        research: values.research
      }
    };
    this._repository.submitForms(data).subscribe(c => {
      this._swal.successFullRegister();
      this._router.navigate(['/']);
    });
  }
}
