import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { IPasswordAndConfirmPassword } from './IPasswordAndConfirmPassword';

@Injectable({
  providedIn: 'root'
})
export class ValidatorCoreService {
  static nationalCodeChecker(control: AbstractControl) {
    if (!control.value) {
      return null;
    }
    if (!new RegExp('[0-9]{10}$').test(control.value)) {
      return {
        'national': true
      };
    }
    if (control.value === '0123456789') {
      return {
        'national': true
      };
    }
    for (let i = 0; i < 10; i++) {
      if (new RegExp(i + '{10}$').test(control.value)) {
        return {
          'national': true
        };
      }
    }
    let sum = 0;
    for (let i = 0; i < 9; i++) {
      sum += ((10 - i) * +(control.value as string).substr(i, 1));
    }
    const ret = sum % 11, parity = +(<string>control.value).substr(9, 1);
    if ((ret < 2 && ret === parity) || (ret >= 2 && ret === 11 - parity)) {
      return null;
    }
    return {
      'national': true
    };
  }
  static checkPasswords(group: FormGroup<IPasswordAndConfirmPassword>) {
    return group.controls.password?.value === group.controls.confirmPassword?.value ? null : { confirmPassword: true };
  }
  constructor () { }
  SetStatus(control: AbstractControl) {
    return (control.valid) ? 'success' : 'error';
  }
  GetMessage(control: AbstractControl): string {
    return control.getError('required') ? 'این فیلدالزامی میباشد.' :
      control.getError('ascii') ? 'حروف لاتین وارد نمایید.' :
        control.getError('national') ? 'کد ملی شما درست نمی باشد.' :
          control.getError('email') ? 'ایمیل شما درست نمی باشد.' :
            control.getError('minlength') ? ' حداقل طول مجاز را رعایت نکرده اید.' :
              control.getError('maxlength') ? 'حداکثر طول مجاز را رعایت نکرده اید' :
                control.getError('pattern') ? 'الگو شما درست نمی باشد' :
                  control.getError('phoneNumber') ? 'شماره تلفن شما درست نمی باشد.' :
                    control.parent.getError('confirmPassword') ? 'پسورد شما تطابق ندارد.' :
                      control.getError('max') ? 'مقدار کمتری را وارد کنید' :
                        control.getError('min') ? 'مقدار بالاتری را وارد کنید' : '';
  }
}
