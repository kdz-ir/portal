import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdditionalValidators } from 'ng-behroozbc-libraries-validators';

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
  constructor (private readonly _fb: FormBuilder) {
    this.personalForm = _fb.group({
      fatherphone: [, [Validators.required, AdditionalValidators.PhoneNumber]],
      motherphone: [, [Validators.required, AdditionalValidators.PhoneNumber]],
      numberOfFamilyMembers: [, [Validators.required, Validators.min(1)]],
      workbook: [, [Validators.required]],
      acquaintance: [, [Validators.required]],
      goalForMantrak: [, [Validators.required]],
      likedClass: [, [Validators.required]],
      suggestions: [, [Validators.required]],
      personLinkedFiled: [, [Validators.required]],
      avestaKhani: [, [Validators.required]],
      isParticipating: [, [Validators.required]]
    });
  }
  onSubmit() {
    console.log(this.personalForm.value);

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