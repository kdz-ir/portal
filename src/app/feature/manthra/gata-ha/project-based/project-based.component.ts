import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AgeType } from 'src/app/core/model/age-type-enum';
import { ValidatorCoreService } from 'src/app/core/services/forms/validator-core.service';
import { SwalService } from 'src/app/core/services/swal/swal.service';
import { gataHaRegisterFiled } from '../../models/gata-ha-register-field-enum';
import { ManthraReporsitoryService } from '../../services/manthra-reporsitory.service';

@Component({
  selector: 'app-project-based',
  templateUrl: './project-based.component.html',
  styleUrls: ['./project-based.component.scss']
})
export class ProjectBasedComponent implements OnInit {
  readonly subjects = this._repository.getProjectSubjects();
  readonly ageTypeEnum = AgeType;
  projectbaseForm: UntypedFormGroup;
  ageRange = 0;
  constructor (private readonly _fb: UntypedFormBuilder,
    private readonly _router: Router,
    private readonly _swal: SwalService, private readonly _repository: ManthraReporsitoryService) {
    this.projectbaseForm = _fb.group({
      subject: [, Validators.required],
      iiarNationalCode: [, [ValidatorCoreService.nationalCodeChecker]],
      ordooHamaysh: []
    });
  }

  ngOnInit(): void {
    this._repository.getAgeRange().subscribe(c => {
      this.ageRange = c.entity.ageType;

    });
  }
  onblurInput() {
    if (this.projectbaseForm.controls.iiarNationalCode.valid && this.projectbaseForm.value.iiarNationalCode)
      this._repository.canPersionRegister(this.projectbaseForm.value.iiarNationalCode).subscribe(c => {
        console.log(c);

      }, () => {
        this.projectbaseForm.controls.iiarNationalCode.setValue('');
      });
  }
  onSubmit() {
    const values = this.projectbaseForm.value;
    this._repository.submitGatahaForms({
      registerFiled: [gataHaRegisterFiled.projectBase],
      subject: values.subject,
      iiarNationalCode: [values.iiarNationalCode],
      isOrdooHamayesh: values.ordooHamaysh.isOrdooHamayesh,
      ageType: this.ageRange,
      step: 100,
      isProjectBase: true,
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
    }).subscribe(c => {
      this._swal.successFullRegister();
      this._router.navigate(['/']);
    });
  }
}
