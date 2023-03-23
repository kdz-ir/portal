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
      mindControlWorkshop: [false],

      algoritm: [false],
      narmafzar: [false],
      grim: [false],
      bracelets: [false],
      narration: [false],
      caricature: [false],
      origami: [false],
      helps: [false],
      experiments: [false],
      iran: [false],
      yoga: [false],
      stories: [false],     
      food: [false],
      arts: [false]
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
        algoritm: values.algoritmr,
        narmafzar: values.narmafzar,
        grim: values.grim,
        bracelets: values.Bracelets,
        narration: values.narration,
        caricature: values.Caricature,
        origami: values.origami,
        helps: values.helps,
        experiments: values.Experiments,
        iran: values.iran,
        yoga: values.yoga,
        stories: values.stories,
        food: values.food,
        arts: values.arts,
        bodyLanguage: values.bodyLanguage
      }
    }).subscribe(c => {
      this._swal.successFullRegister();
      this._router.navigate(['/']);
    });
  }
}
