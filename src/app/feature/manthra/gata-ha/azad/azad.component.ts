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
      iiarNationalCodeAsli1: [, [ValidatorCoreService.nationalCodeChecker]],
      iiarNationalCodeAsli0: [, [ValidatorCoreService.nationalCodeChecker]],
      iiarNationalCodeAsli2: [, [ValidatorCoreService.nationalCodeChecker]],
      isLikeAttend: [false],
      isOrdooHamayesh: [false],
      resumeWriting: [],
      ravanShenasi: [],
      technologyWorkshop: [],
      other: [],
      linkedin: [],
      emotionalIntelligenceWorkshop: [],
      contentProduction: [],
      bodyLanguage: [],
      mindControlWorkshop: [],

      algoritm: [],
      narmafzar: [],
      grim: [],
      Bracelets: [],
      narration: [],
      Caricature: [],
      origami: [],
      helps: [],
      Experiments: [],
      iran: [],
      yoga: [],
      stories: [],     
      food: [],
      arts: [],


      principlesOfPhotography: []
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
    if (values.iiarNationalCodeAsli1 != null) {
      iiarNationalCodeAsli.push(values.iiarNationalCodeAsli2);
    }
    if (values.iiarNationalCodeAsli2 != null) {
      iiarNationalCodeAsli.push(values.iiarNationalCodeAsli2);
    }

    const data = {
      registerFiled: resgfiled,
      isOrdooHamayesh: values.isOrdooHamayesh,
      iiarNationalCodeAsli: uniq(iiarNationalCodeAsli),
      ageType: this.ageRange,
      isProjectBase: false,
      step: 100,
      state: 'end',
      isLikeAttend:values.isLikeAttend,
      oordoHamayesh: {
        resumeWriting: values.resumeWriting,
        ravanShenasi: values.ravanShenasi,
        technologyWorkshop: values.technologyWorkshop,
        other: values.other,
        linkedin: values.linkedin,
        emotionalIntelligenceWorkshop: values.emotionalIntelligenceWorkshop,
        contentProduction: values.contentProduction,
        mindControlWorkshop: values.mindControlWorkshop,
        principlesOfPhotography: values.principlesOfPhotography,

        algoritm: values.algoritmr,
        narmafzar: values.narmafzar,
        grim: values.grim,
        Bracelets: values.Bracelets,
        narration: values.narration,
        Caricature: values.Caricature,
        origami: values.origami,
        helps: values.helps,
        Experiments: values.Experiments,
        iran: values.iran,
        yoga: values.yoga,
        stories: values.stories,
        food: values.food,
        arts: values.arts,
        bodyLanguage: values.bodyLanguage
      }
    };
    this._repository.submitGatahaForms(data).subscribe(c => {
      this._swal.successFullRegister();
      this._router.navigate(['/']);
    });
  }
}
