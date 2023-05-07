import { Component, OnInit } from '@angular/core';
import { AbstractControl, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AgeType } from 'src/app/core/model/age-type-enum';
import { SwalService } from 'src/app/core/services/swal/swal.service';
import { ManthraReporsitoryService } from '../../services/manthra-reporsitory.service';
import { ILabel } from 'src/app/shared/models/yesOrNoAnswer';

@Component({
  selector: 'app-up-thirteen',
  templateUrl: './up-thirteen.component.html',
  styleUrls: ['./up-thirteen.component.scss']
})
export class UpThirteenComponent implements OnInit {
  readonly ageTypeEnum = AgeType;
  readonly avestaKhaniCategories = avestaKhaniCategoriesList;
  avestaKhaniForm: UntypedFormGroup;
  ageRange = 0;
  constructor (private readonly _fb: UntypedFormBuilder,
    private readonly _router: Router,
    private readonly _swal: SwalService, private readonly _repository: ManthraReporsitoryService) {
    this.avestaKhaniForm = _fb.group({
      ordooHamaysh: [],
      category: [, [Validators.required]],
      rade: ['0'],
      iiarNationalCodeAsli0: [],
      groupNumber: []
    });
  }
  ngOnInit(): void {
    this._repository.getAgeRange().subscribe(c => {
      this.ageRange = c.entity.ageType;

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
  onSubmit() {
    const values = this.avestaKhaniForm.value;
    console.log(values);
    this._repository.submitAvestaKhaniForms({
      rade: +values.rade,
      isOrdooHamayesh: values.ordooHamaysh.isOrdooHamayesh,
      ageType: this.ageRange,
      category: values.category,
      iiarNationalCodeAsli0: values.iiarNationalCodeAsli0,
      groupNumber: values.groupNumber,
      step: 100,
      state: 'end',
      oordoHamayesh: {
        algoritm: values.ordooHamaysh.algoritm,
        narmafzar: values.ordooHamaysh.narmafzar,
        other: values.ordooHamaysh.other,
        grim: values.ordooHamaysh.grim,
        bracelets: values.ordooHamaysh.Bracelets,
        narration: values.ordooHamaysh.narration,
        origami: values.ordooHamaysh.origami,
        helps: values.ordooHamaysh.helps,
        experiments: values.ordooHamaysh.Experiments,
        iran: values.ordooHamaysh.iran,
        arts: values.ordooHamaysh.arts,
        yoga: values.ordooHamaysh.yoga,
        stories: values.ordooHamaysh.stories,
        food: values.ordooHamaysh.food,
        ravanShenasi: values.ordooHamaysh.ravanShenasi,
        resumeWriting: values.ordooHamaysh.resumeWriting,
        emotionalIntelligenceWorkshop: values.ordooHamaysh.emotionalIntelligenceWorkshop,
        technologyWorkshop: values.ordooHamaysh.technologyWorkshop,
        contentProduction: values.ordooHamaysh.contentProduction,
        principlesOfPhotoarts: values.ordooHamaysh.principlesOfPhotoarts,
        bodyLanguage: values.ordooHamaysh.bodyLanguage,
        mindControlWorkshop: values.ordooHamaysh.mindControlWorkshop,
        linkedin: values.ordooHamaysh.linkedin,
        caricature: values.ordooHamaysh.Caricature
      }
    }).subscribe(c => {
      this._swal.successFullRegister();
      this._router.navigate(['/']);
    });
  }
}
export const avestaKhaniCategoriesList: ILabel[] = [{
  label: 'رو خوانی',
  value: 0
},
{
  label: 'از بر خوانی',
  value: 1
}, {
  label: 'از بر گروهی',
  value: 2
}];