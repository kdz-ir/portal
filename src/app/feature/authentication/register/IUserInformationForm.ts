import { FormControl } from '@angular/forms';

export interface IUserInformationForm {
  nationalCode: FormControl<string>;
  password: FormControl<string>;
  captcha: FormControl<string | null>;
}
