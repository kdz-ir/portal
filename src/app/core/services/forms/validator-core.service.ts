import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorCoreService
{
  static PhoneNumber(control: AbstractControl)
  {
    if (/(0|\+98)?([ ]|-|[()]){0,2}9[1|2|3|4]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}/ig.test(control.value)
      && control.value?.length === 11)
    {
      return null;
    }
    return { phoneNumber: true };
  }
  static checkPasswords(group: FormGroup)
  {
    const pass = group.get('password')?.value;
    const confirmPass = group.get('confirmPassword')?.value;

    return pass === confirmPass ? null : { confirmPassword: true };
  }
  constructor() { }
  SetStatus(control: AbstractControl)
  {
    return (control.valid) ? 'success' : 'error';
  }
  GetMessage(control: AbstractControl): string
  {
    return control.getError('required') ? 'این فیلدالزامی میباشد.' :
      control.getError('national') ? 'کد ملی شما درست نمی باشد.' :
        control.getError('email') ? 'ایمیل شما درست نمی باشد.' :
          control.getError('minlength') ? ' حداقل 6 کارکتر الزامی میباشد.' :
            control.getError('maxlength') ? 'حداکثر طول مجاز را رعایت نکرده اید' :
              control.getError('pattern') ? 'الگو شما درست نمی باشد' :
                control.getError('phoneNumber') ? 'شماره تلفن شما درست نمی باشد.' :
                  control.parent.getError('confirmPassword') ? 'پسورد شما تطابق ندارد.' :
                    control.getError('max') ? 'مقدار کمتری را وارد کنید' :
                      control.getError('min') ? 'مقدار بالاتری را وارد کنید' : '';
  }
}
