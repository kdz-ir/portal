import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, UntypedFormGroup, Validators } from '@angular/forms';
import { RepositoryService } from '../Services/repository.service';
import { MatStepper } from '@angular/material/stepper';
import { ValidatorCoreService } from 'src/app/core/services/forms/validator-core.service';
import { Router } from '@angular/router';
import { ConfirmPasswordErrorStateMatcher } from 'src/app/core/services/forms/confirm-password-error-state-matcher';
import { ForgetPasswordInfo } from '../model/forget-password-info';
import { AdditionalValidators } from 'ng-behroozbc-libraries-validators';
import { SwalService } from 'src/app/core/services/swal/swal.service';
import { IPasswordAndConfirmPassword } from 'src/app/core/services/forms/IPasswordAndConfirmPassword';
import { IForgetPasswordCheckSmsCodeForm } from './IForgetPasswordCheckSmsCodeForm';
import { IForgetPasswordSendSmsForm } from './IForgetPasswordSendSmsForm';
@Component({
  selector: 'kdz-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent {
  matcher = new ConfirmPasswordErrorStateMatcher();
  isloading = false;
  readonly sendSmsForm: FormGroup<IForgetPasswordSendSmsForm>;
  readonly checkCodeForm: FormGroup<IForgetPasswordCheckSmsCodeForm>;
  readonly forgetPasswordForm: FormGroup<IPasswordAndConfirmPassword>;
  @ViewChild(MatStepper) stepper: MatStepper;
  constructor (readonly fb: FormBuilder,
    private readonly _repository: RepositoryService,
    public readonly validatorCoreService: ValidatorCoreService,
    private readonly _router: Router,
    private readonly _swal: SwalService,
  ) {
    this.sendSmsForm = fb.group<IForgetPasswordSendSmsForm>({
      nationalCode: fb.nonNullable.control<string>('', [ValidatorCoreService.nationalCodeChecker, Validators.required, AdditionalValidators.CheckIsASCII]),
      captcha: fb.control<string>(null)
    });
    this.checkCodeForm = fb.group<IForgetPasswordCheckSmsCodeForm>({
      code: fb.control<number>(null, [Validators.required])
    });
    this.forgetPasswordForm = fb.group<IPasswordAndConfirmPassword>({
      password: fb.nonNullable.control<string>('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: fb.nonNullable.control('', [Validators.required, Validators.minLength(6)])
    }, { validators: ValidatorCoreService.checkPasswords });
  }

  onSendSms() {
    this.isloading = true;
    this._repository.sendSmsForgetPassword(this.sendSmsForm.value.nationalCode, this.sendSmsForm.value.captcha)
      .subscribe((c) => {
        this._swal.swal.fire({
          title: `کد یکبار مصرف برای شما ارسال شد.`,
          icon: 'info',
          html: `ما برای بازیابی حساب کاربری شما یک<br> پیامک را به شماره ${c.entity.mobile} ارسال کرده ایم.<br>کد ارسال شده را در کادر مربوطه وارد کنید
          <br><span style="color:red">اگر شماره شما درست نمی باشد لطفا با مدیر سیستم تماس بگیرید</span>
          `
        });
        this._setIsloadingFalse();
      }, () => { this._setIsloadingFalse(); this.stepper.reset(); });
  }
  onCheckCodeFromSubmit(stepper: MatStepper) {
    this.isloading = true;
    this._repository.forgetSmsVerify(this.sendSmsForm.value.nationalCode, this.checkCodeForm.value.code, this.sendSmsForm.value.captcha).subscribe(t => {
      this._setIsloadingFalse();
      stepper.next();



    }, this._setIsloadingFalse.bind(this));
  }
  onNewPasswordSubmit() {
    const data: ForgetPasswordInfo = {
      otp: +this.checkCodeForm.value.code,
      password: this.forgetPasswordForm.value.password,
      token: this.sendSmsForm.value.captcha,
      nationalCode: this.sendSmsForm.value.nationalCode
    };
    this._repository.forgetPassword(data).subscribe(async () => {
      this._swal.swal.fire({
        title: 'رمز شما با موفقیت عوض شد.',
        confirmButtonText: 'باشه',
        icon: 'success'
      });
      this._router.navigate(['/Authentication']);

    });
  }
  private _setIsloadingFalse() {
    this.isloading = false;
  }
}

