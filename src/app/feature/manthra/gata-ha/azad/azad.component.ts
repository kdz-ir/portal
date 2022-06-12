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
      resumeWriting: [],
      ravanShenasi: [],
      technologyWorkshop: [],
      other: [],
      linkedin: [],
      emotionalIntelligenceWorkshop: [],
      contentProduction: [],
      bodyLanguage: [],
      mindControlWorkshop: [],









// baraye filed haye 13-18
Algorithm: [],
TrainingSoftware: [],
grim: [],
Bracelets: [],
Caricature: [],
origami: [],
aidClass: [],
experiments: [],
Iranology: [],
yoga: [],
story: [],
food: [],
arts: [],
narration: [],












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
        resumeWriting: values.resumeWriting,
        ravanShenasi: values.ravanShenasi,
        technologyWorkshop: values.technologyWorkshop,
        other: values.other,
        linkedin: values.linkedin,
        emotionalIntelligenceWorkshop: values.emotionalIntelligenceWorkshop,
        contentProduction: values.contentProduction,
        mindControlWorkshop: values.mindControlWorkshop,
        principlesOfPhotography: values.principlesOfPhotography,










//baraye field 13-18
Algorithm: values.Algorithm,
TrainingSoftware: values.TrainingSoftware,
grim: values.grim,
Bracelets: values.Bracelets,
Caricature: values.Caricature,
origami: values.origami,
aidClass: values.aidClass,
experiments: values.experiments,
Iranology: values.Iranology,
yoga: values.yoga,
story: values.story,
food: values.food,
arts: values.arts,
narration: values.narration,









        bodyLanguage: values.bodyLanguage
      }
    };
    this._repository.submitGatahaForms(data).subscribe(c => {
      this._swal.successFullRegister();
      this._router.navigate(['/']);
    });
  }
}
