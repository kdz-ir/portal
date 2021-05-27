import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdditionalValidators } from 'ng-behroozbc-libraries-validators';
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
  constructor (private readonly _fb: FormBuilder, private readonly _swal: SwalService, private readonly _router: Router, private readonly _repository: ManthraReporsitoryService) {
    this.personalForm = _fb.group({
      fatherphone: [, [Validators.required, AdditionalValidators.PhoneNumber]],
      motherphone: [, [Validators.required, AdditionalValidators.PhoneNumber]],
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
  { value: 0, label: 'خانواده' },
  { value: 1, label: 'دوستان' },
  { value: 2, label: 'معلمان و اساتید مدارس' },
  { value: 3, label: 'تبلیغات فضای مجازی' },
  { value: 4, label: 'سایت‌های خبرگذاری داخلی (برساد و امرداد)' },
];
export const personLinkedFiled = [
  { value: 0, label: 'موسیقی' },
  { value: 1, label: 'دینی' },
  { value: 2, label: 'خودشناسی' },
  { value: 3, label: 'خلاقیت' },




















];
export const isLikeAvestaKhani = [
  { value: 0, label: 'نه' },
  { value: 1, label: 'اهنوردگات' },
  { value: 2, label: 'اشتود-سپنتمدگات' },
  { value: 3, label: 'کل گاتا' },
];