import { FormControl } from '@angular/forms';

export interface ISendSmsForm {
  phoneNumber: FormControl<string>;
  captcha: FormControl<string | null>;
}
