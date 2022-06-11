import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  projectbaseForm: FormGroup;
  ageRange = 0;
  constructor (private readonly _fb: FormBuilder,
    private readonly _router: Router,
    private readonly _swal: SwalService, private readonly _repository: ManthraReporsitoryService) {
    this.projectbaseForm = _fb.group({
      subject: [, Validators.required],
      iiarNationalCode: [, [ValidatorCoreService.nationalCodeChecker]],
      isLikeAttend:[false],
      isOrdooHamayesh: [false],
      resumeWriting: [false],
      ravanShenasi: [false],
      technologyWorkshop: [false],
      other: [],
      linkedin: [false],
      emotionalIntelligenceWorkshop: [false],
      contentProduction: [false],
      principlesOfPhotography: [false],
      bodyLanguage: [false],
      mindControlWorkshop: [false]
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
      isOrdooHamayesh: values.isOrdooHamayesh,
      ageType: this.ageRange,
      step: 100,
      isProjectBase: true,
      state: 'end',
      isLikeAttend:values.isLikeAttend,
      oordoHamayesh: {
        resumeWriting: values.resumeWriting,
        ravanShenasi: values.ravanShenasi,
        emotionalIntelligenceWorkshop: values.emotionalIntelligenceWorkshop,
        other: values.other,
        technologyWorkshop: values.technologyWorkshop,
        contentProduction: values.contentProduction,
        linkedin: values.linkedin,
        principlesOfPhotography: values.principlesOfPhotography,
        mindControlWorkshop: values.mindControlWorkshop,
        bodyLanguage: values.bodyLanguage
      }
    }).subscribe(c => {
      this._swal.successFullRegister();
      this._router.navigate(['/']);
    });
  }
}
