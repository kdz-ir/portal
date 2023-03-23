import { FormControl } from '@angular/forms';
import * as moment from 'jalali-moment';

export interface IProfileForm {
  name: FormControl<string>;
  lastName: FormControl<string>;
  sex: FormControl<number>;
  fatherName: FormControl<string>;
  address: FormControl<string>;
  postalCode: FormControl<string>;
  city: FormControl<number>;
  birthday: FormControl<moment.Moment>;
  phone: FormControl<string>;
  IdCardPhoto: FormControl<string>;
  personalPhoto: FormControl<string>;
}
