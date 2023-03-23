import { FormControl } from '@angular/forms';

export interface IPasswordAndConfirmPassword {
  password: FormControl<string>;
  confirmPassword: FormControl<string>;
}
