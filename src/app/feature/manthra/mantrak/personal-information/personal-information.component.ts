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
  readonly acquaintanceModel = acquaintanceModel;
  constructor (private readonly _fb: FormBuilder) {
    this.personalForm = _fb.group({
      fatherphone: [, [Validators.required, AdditionalValidators.PhoneNumber]],
      motherphone: [, [Validators.required, AdditionalValidators.PhoneNumber]],
      numberOfFamilyMembers: [, [Validators.required, Validators.min(1)]],
      workbook: [, [Validators.required]],
      acquaintance: [, [Validators.required]],
      goalForMantrak: [, [Validators.required]],
      likedClass:[,[Validators.required]]
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