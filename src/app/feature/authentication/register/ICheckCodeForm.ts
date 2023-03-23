import { FormControl } from '@angular/forms';

export interface ICheckCodeForm {
  code: FormControl<number>;
  captcha: FormControl<string | null>;
}
