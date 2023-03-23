import { FormControl } from '@angular/forms';

export interface ILoginForm {
  nationalCode: FormControl<string>;
  password: FormControl<string>;
  captcha: FormControl<string | null>;
}
