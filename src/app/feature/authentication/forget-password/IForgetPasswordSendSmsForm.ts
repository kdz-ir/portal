import { FormControl } from '@angular/forms';

export interface IForgetPasswordSendSmsForm {
  nationalCode: FormControl<string>;
  captcha: FormControl<string | null>;
}
