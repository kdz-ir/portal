import { Component, OnInit } from '@angular/core';
import { AbstractControl, UntypedFormBuilder, FormControl, UntypedFormGroup } from '@angular/forms';
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
  azadForm: UntypedFormGroup;
  constructor(private readonly _fb: UntypedFormBuilder, private readonly _router: Router, private readonly _repository: ManthraReporsitoryService, private _swal: SwalService) {
    this.azadForm = _fb.group({
      iiarNationalCodeAsli0: [, [ValidatorCoreService.nationalCodeChecker]],
      ordooHamaysh: [],
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
    let resgfiled = [];
    resgfiled.push(gataHaRegisterFiled.Asli);

    if (values.iiarNationalCodeAsli0 != null) {
      iiarNationalCodeAsli.push(values.iiarNationalCodeAsli0);
    }
    const data = {
      registerFiled: resgfiled,
      isOrdooHamayesh: values.ordooHamaysh.isOrdooHamayesh,
      iiarNationalCodeAsli: uniq(iiarNationalCodeAsli),
      ageType: this.ageRange,
      isProjectBase: false,
      step: 100,
      state: 'end',
      oordoHamayesh: {
        goftogo: values.ordooHamaysh.goftogo,
        sweets: values.ordooHamaysh.sweets,
        boors: values.ordooHamaysh.boors,
        other: values.ordooHamaysh.other,
        digital: values.ordooHamaysh.digital,
        advidio: values.ordooHamaysh.advidio,
        brand: values.ordooHamaysh.brand,
        copyright: values.ordooHamaysh.copyright,
        instageram: values.ordooHamaysh.instageram,
        mozkerat: values.ordooHamaysh.mozkerat,
        elmi: values.ordooHamaysh.elmi,
        sport: values.ordooHamaysh.sport,
        art: values.ordooHamaysh.art,
        visit: values.ordooHamaysh.visit,
      }
    };
    this._repository.submitGatahaForms(data).subscribe(c => {
      this._swal.successFullRegister();
      this._router.navigate(['/']);
    });
  }
}
