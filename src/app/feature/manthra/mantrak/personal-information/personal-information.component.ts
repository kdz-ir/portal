import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdditionalValidators } from 'ng-behroozbc-libraries-validators';
import { ValidatorCoreService } from 'src/app/core/services/forms/validator-core.service';
import { SwalService } from 'src/app/core/services/swal/swal.service';
import { ManthraReporsitoryService } from '../../services/manthra-reporsitory.service';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss']
})
export class PersonalInformationComponent implements OnInit {

  personalForm: FormGroup;
  readonly personLinkedFiled = personLinkedFiled;
  readonly acquaintanceModel = acquaintanceModel;
  readonly isLikeAvestaKhani = isLikeAvestaKhani;
  ageType: number;
  constructor (private readonly _fb: FormBuilder, public readonly validatorCoreService: ValidatorCoreService, private readonly _swal: SwalService, private readonly _router: Router,
    private readonly _repository: ManthraReporsitoryService) {

    _repository.avestaGetAgeRange.subscribe(c => {
      this.ageType = c.entity.ageType;
    });
    this.personalForm = _fb.group({
      fatherphone: [, [Validators.required, AdditionalValidators.PhoneNumber, AdditionalValidators.CheckIsASCII]],
      motherphone: [, [Validators.required, AdditionalValidators.PhoneNumber, AdditionalValidators.CheckIsASCII]],
      numberOfFamilyMembers: [, [Validators.required, Validators.min(1), Validators.max(20)]],
      workbook: [, [Validators.required]],
      acquaintance: [, [Validators.required]],
      goalForMantrak: [,],
      likedClass: [,],
      suggestions: [,],
      personLinkedFiled: [,],
      avestaKhani: [, [Validators.required]],
      isParticipating: [, [Validators.required]]
    });
  }
  onSubmit() {
    const formValue = this.personalForm.value;
    const data = {
      fatherphone: formValue.fatherphone,
      motherphone: formValue.motherphone,
      numberOfFamilyMembers: formValue.numberOfFamilyMembers,
      workbook: formValue.workbook,
      acquaintance: formValue.acquaintance,
      goalForMantrak: formValue.goalForMantrak,
      likedClass: formValue.likedClass,
      ageType: this.ageType,
      suggestions: formValue.suggestions,
      personLinkedFiled: formValue.personLinkedFiled,
      avestaKhani: formValue.avestaKhani,
      isParticipating: formValue.isParticipating,
      step: (formValue.isParticipating) ? 1 : 100,
      status: (formValue.isParticipating) ? '' : 'end'
    };
    this._repository.mantrakRegister(data).subscribe(c => {
      if (formValue.isParticipating == false) {
        this._swal.successFullRegister();
        this._router.navigate(['/']);
      } else {
        this._router.navigate(['/Manthra/mantrak/mantrk-participat-avesta-khani']);
      }
    });

  }
  ngOnInit(): void {
  }

}
export const acquaintanceModel = [
  { value: 0, label: '??????????????' },
  { value: 1, label: '????????????' },
  { value: 2, label: '???????????? ?? ???????????? ??????????' },
  { value: 3, label: '?????????????? ???????? ??????????' },
  { value: 4, label: '????????????????? ???????????????? ?????????? (?????????? ?? ????????????)' },
  { value: 5, label: '????????' },
];
export const personLinkedFiled = [
  { value: 0, label: '????????????' },
  { value: 1, label: '????????' },
  { value: 2, label: '????????????????? ?? ???????????????????????' },
  { value: 3, label: '?????? ?? ????????????' },
];
export const isLikeAvestaKhani = [
  { value: 0, label: '??????' },
  { value: 1, label: '????????????????' },
  { value: 2, label: '??????????-??????????????????' },
  { value: 3, label: '???? ????????' },
];